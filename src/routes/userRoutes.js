import express from 'express';
import {
  getAllUsers,
  getSingleUser,
  updateUserProfile,
  deleteUser,
  makeUserAdmin
} from '../controllers/userController.js';
import { authorize } from '../middleware/authMiddleware.js';
import { isAdmin } from '../middleware/roleMiddleware.js';

const router = express.Router();

// Protected routes
router.use(authorize);

// Regular users
router.get('/me', getSingleUser);
router.put('/update-profile', updateUserProfile);

// Admin-only routes
router.get('/', authorize('admin'), getAllUsers);
router.put('/make-admin/:id', authorize('admin'), makeUserAdmin);
router.delete('/:id', authorize('admin'), deleteUser);

export default router;
