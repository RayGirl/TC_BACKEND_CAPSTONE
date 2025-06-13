import Course from '../models/Course.js';

export const createCourse = async (req, res) => {
  try {
    const { title, description, videos, materials } = req.body;

    if (!title || !description || !videos || !Array.isArray(videos)) {
      return res.status(400).json({ message: "Title, description, and videos are required." });
    }

    const course = new Course({
      title,
      description,
      videos,
      materials, 
      createdBy: req.user?._id
    });

    await course.save();
    res.status(201).json({ message: "Course created successfully", course });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
