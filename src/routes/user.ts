import { Router } from 'express';
import { getProfile, updateProfile, getAllUsers } from '../controllers/userController';
import { authenticate, authorizeRoles } from '../middlewares/auth';

const router = Router();

router.get('/me', authenticate, getProfile);
router.put('/me', authenticate, updateProfile);
router.get('/', authenticate, authorizeRoles('admin'), getAllUsers);

export default router; 