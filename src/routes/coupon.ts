import { Router } from 'express';
import { create, validate, apply, list } from '../controllers/couponController';
import { authenticate, authorizeRoles } from '../middlewares/auth';

const router = Router();

router.post('/', authenticate, authorizeRoles('supplier'), create);
router.post('/validate', authenticate, validate);
router.post('/apply', authenticate, apply);
router.get('/', authenticate, authorizeRoles('supplier'), list);

export default router; 