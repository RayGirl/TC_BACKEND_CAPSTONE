// routes/courseRoutes.js

import express from 'express';
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} from '../controllers/courseController.js';

const router = express.Router();

// @route   POST /api/courses
// @desc    Create a new course
router.post('/', createCourse);

// @route   GET /api/courses
// @desc    Get all courses
router.get('/', getAllCourses);

// @route   GET /api/courses/:id
// @desc    Get a single course by ID
router.get('/:id', getCourseById);

// @route   PUT /api/courses/:id
// @desc    Update a course
router.put('/:id', updateCourse);

// @route   DELETE /api/courses/:id
// @desc    Delete a course
router.delete('/:id', deleteCourse);

export default router;
