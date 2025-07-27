import { Router } from 'express';
import { createOrder, getOrder, updateOrderStatus } from '../controllers/orderController';
import { authenticate } from '../middlewares/auth';

const router = Router();

router.post('/', authenticate, createOrder);
router.get('/:id', authenticate, getOrder);
router.put('/:id/status', authenticate, updateOrderStatus);

export default router; 