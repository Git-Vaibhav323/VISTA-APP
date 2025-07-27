import { Router } from 'express';
import { getBackupVendor } from '../controllers/backupVendorController';
import { authenticate } from '../middlewares/auth';

const router = Router();

router.post('/', authenticate, getBackupVendor);

export default router; 