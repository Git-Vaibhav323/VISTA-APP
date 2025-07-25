import { Request, Response } from 'express';
import Order from '../models/Order';

export const createOrder = async (req: any, res: Response) => {
  try {
    const order = { ...req.body, id: 'demo', vendorIds: [req.user.id], status: 'pending' };
    res.status(201).json(order);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getOrder = async (req: Request, res: Response) => {
  try {
    const order = { id: req.params.id, items: [], status: 'pending', supplierId: '1', vendorIds: ['1'], otp: '123456', deliveryLog: [], groupOrder: null };
    res.json(order);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const order = { id: req.params.id, status: req.body.status };
    res.json(order);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}; 