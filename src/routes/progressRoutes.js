import express from 'express';
import {
    updateProgress,
    getProgress,
    getUserProgress
} from '../controllers/progressController.js';
import {protect} from '../middleware/authMiddleware.js';
import {isAdmin} from '../middleware/roleMiddleware.js';


const router = express.Router();
//Create a progress entry for a course
router.post('/', protect, updateProgress);
//Get a user's progress
router.get('/:userId', protect, getUserProgress);
//Update user progress
router.patch('/:progressId', protect, updateProgress);

export default router;