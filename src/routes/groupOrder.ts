import { Router } from 'express';
import { create, addOrder, get, getSupplierGroups } from '../controllers/groupOrderController';
import { authenticate } from '../middlewares/auth';

const router = Router();

router.post('/', authenticate, create);
router.post('/:groupOrderId/add-order', authenticate, addOrder);
router.get('/:groupOrderId', authenticate, get);
router.get('/supplier/:supplierId', authenticate, getSupplierGroups);

export default router; 