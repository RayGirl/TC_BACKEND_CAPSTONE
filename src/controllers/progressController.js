import Progress from '../models/Progress.js';
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
