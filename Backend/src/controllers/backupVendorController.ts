import { Request, Response } from 'express';
import { findBackupVendor } from '../services/backupVendorService';

export const getBackupVendor = async (req: any, res: Response) => {
  try {
    const { itemName, requiredQty } = req.body;
    const currentVendorId = req.user.id;
    const backupVendor = await findBackupVendor(itemName, requiredQty, currentVendorId);
    if (!backupVendor) return res.status(404).json({ message: 'No backup vendor found' });
    res.json(backupVendor);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}; 