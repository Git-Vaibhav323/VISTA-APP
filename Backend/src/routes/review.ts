import { Router } from 'express';
import { createReview, getReviewsForOrder, getReviewsForUser } from '../controllers/reviewController';
import { authenticate } from '../middlewares/auth';

const router = Router();

router.post('/', authenticate, createReview);
router.get('/order/:orderId', getReviewsForOrder);
router.get('/user/:userId', getReviewsForUser);

export default router; 