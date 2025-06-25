import Progress from '../models/Progress.js';
import Course from '../models/Course.js';
export const updateProgress = async (req, res) => {
  const { courseId } = req.params;
  const { videoUrl } = req.body;
  const userId = req.user._id;

  try {
    let progress = await Progress.findOne({ user: userId, course: courseId });

    if (!progress) {
      progress = new Progress({
        user: userId,
        course: courseId,
        completedVideos: [{ videoUrl, completedAt: new Date() }]
      });
    } else {
      const alreadyCompleted = progress.completedVideos.some(
        (v) => v.videoUrl === videoUrl
      );

      if (!alreadyCompleted) {
        progress.completedVideos.push({ videoUrl, completedAt: new Date() });
        progress.lastUpdated = new Date();
      }
    }

    await progress.save();
    res.status(200).json({ message: 'Progress updated', progress });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get progress for a specific user and course
export const getProgress = async (req, res) => {
  try {
    const userId = req.user.id;
    const { courseId } = req.params;

    const progress = await Progress.findOne({ user: userId, course: courseId });

    if (!progress) {
      return res.status(404).json({ success: false, message: 'Progress not found' });
    }

    res.status(200).json({ success: true, progress });
  } catch (err) {
res.status(500).json({ success: false, message: err.message });
  }
};

// Get all progress records for a user
export const getUserProgress = async (req, res) => {
  try {
    const userId = req.user.id;
    const progressRecords = await Progress.find({ user: userId }).populate('course');

    res.status(200).json({ success: true, progress: progressRecords });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
