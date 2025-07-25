import { Request, Response } from 'express';
import User from '../models/User';

export const getProfile = async (req: any, res: Response) => {
  try {
    const user = { id: req.user.id, name: 'Demo User', email: 'demo@example.com', phone: '9999999999', role: 'vendor' };
    res.json(user);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const updateProfile = async (req: any, res: Response) => {
  try {
    const user = { ...req.body, id: req.user.id };
    res.json(user);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllUsers = async (req: any, res: Response) => {
  try {
    const users = [
      { id: '1', name: 'Demo User 1', email: 'demo1@example.com', phone: '9999999991', role: 'vendor' },
      { id: '2', name: 'Demo User 2', email: 'demo2@example.com', phone: '9999999992', role: 'supplier' },
    ];
    res.json(users);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}; 