import { Request, Response } from 'express';
import { autoMatchBackupVendor } from '../services/autoMatchBackupVendorService';

export const autoMatch = async (req: any, res: Response) => {
  try {
    const { itemName, requiredQty } = req.body;
    const currentVendorId = req.user.id;
    const match = await autoMatchBackupVendor(itemName, requiredQty, currentVendorId);
    if (!match) return res.status(404).json({ message: 'No backup vendor found' });
    res.json(match);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}; 