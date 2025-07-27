import { Router } from 'express';
import authRoutes from './auth';
import userRoutes from './user';
import inventoryRoutes from './inventory';
import orderRoutes from './order';
import walletRoutes from './wallet';
import otpRoutes from './otp';
import deliveryRoutes from './delivery';
import groupOrderRoutes from './groupOrder';
import backupVendorRoutes from './backupVendor';
import reviewRoutes from './review';
import couponRoutes from './coupon';
import trustScoreRoutes from './trustScore';
import autoMatchBackupVendorRoutes from './autoMatchBackupVendor';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/inventory', inventoryRoutes);
router.use('/orders', orderRoutes);
router.use('/wallet', walletRoutes);
router.use('/otp', otpRoutes);
router.use('/delivery', deliveryRoutes);
router.use('/group-orders', groupOrderRoutes);
router.use('/backup-vendor', backupVendorRoutes);
router.use('/reviews', reviewRoutes);
router.use('/coupons', couponRoutes);
router.use('/trust-score', trustScoreRoutes);
router.use('/auto-match-backup-vendor', autoMatchBackupVendorRoutes);

export default router; 