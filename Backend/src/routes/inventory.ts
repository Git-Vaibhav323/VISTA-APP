import { Router } from 'express';
import { getAllInventory, createInventory, updateInventory, deleteInventory } from '../controllers/inventoryController';
import { authenticate } from '../middlewares/auth';

const router = Router();

router.get('/', authenticate, getAllInventory);
router.post('/', authenticate, createInventory);
router.put('/:id', authenticate, updateInventory);
router.delete('/:id', authenticate, deleteInventory);

export default router; 