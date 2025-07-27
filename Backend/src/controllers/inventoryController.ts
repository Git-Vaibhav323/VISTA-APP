import { Request, Response } from 'express';
import Inventory from '../models/Inventory';

export const getAllInventory = async (req: Request, res: Response) => {
  try {
    const items = [
      { id: '1', itemName: 'Tomato', quantity: 100, price: 10, stockStatus: 'in_stock', expiry: new Date(), owner: '1' },
      { id: '2', itemName: 'Onion', quantity: 50, price: 15, stockStatus: 'low', expiry: new Date(), owner: '2' },
    ];
    res.json(items);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const createInventory = async (req: any, res: Response) => {
  try {
    const item = { ...req.body, id: 'demo', owner: req.user.id };
    res.status(201).json(item);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateInventory = async (req: any, res: Response) => {
  try {
    const item = { ...req.body, id: req.params.id };
    res.json(item);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteInventory = async (req: any, res: Response) => {
  try {
    res.json({ message: 'Deleted (demo mode)' });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}; 