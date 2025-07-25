import { Router } from 'express';
import { load, refund, transfer, get } from '../controllers/walletController';
import { authenticate } from '../middlewares/auth';

const router = Router();

router.post('/load', authenticate, load);
router.post('/refund', authenticate, refund);
router.post('/transfer', authenticate, transfer);
router.get('/', authenticate, get);

export default router; 