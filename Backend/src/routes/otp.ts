import { Router } from 'express';
import { send, verify } from '../controllers/otpController';

const router = Router();

router.post('/send', send);
router.post('/verify', verify);

export default router; 