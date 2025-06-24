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


// Get all courses
export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get a course by ID
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update a course
export const updateCourse = async (req, res) => {
  try {
    const { title, description, videos, materials } = req.body;

    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    course.title = title || course.title;
    course.description = description || course.description;
    course.videos = videos || course.videos;
    course.materials = materials || course.materials;

    const updatedCourse = await course.save();

    res.status(200).json({ message: "Course updated", course: updatedCourse });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete a course
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    await course.deleteOne();

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};