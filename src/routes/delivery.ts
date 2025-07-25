import { Router } from 'express';
import { updateDeliveryStatus, getLog } from '../controllers/deliveryController';
import { authenticate } from '../middlewares/auth';

const router = Router();

router.post('/:orderId', authenticate, updateDeliveryStatus);
router.get('/:orderId', authenticate, getLog);

export default router; 