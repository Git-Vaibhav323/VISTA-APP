import { Router } from 'express';
import { autoMatch } from '../controllers/autoMatchBackupVendorController';
import { authenticate } from '../middlewares/auth';

const router = Router();

router.post('/', authenticate, autoMatch);

export default router; 