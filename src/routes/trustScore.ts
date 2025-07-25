import { Router } from 'express';
import { getTrustScore } from '../controllers/trustScoreController';
import { authenticate } from '../middlewares/auth';

const router = Router();

router.get('/', authenticate, getTrustScore); // For current user
router.get('/:userId', authenticate, getTrustScore); // For specific user

export default router; 