import { Request, Response } from 'express';
import { loadMoney, refundMoney, transferToBank, getWallet } from '../services/walletService';

export const load = async (req: any, res: Response) => {
  try {
    const { amount, ref } = req.body;
    const wallet = await loadMoney(req.user.id, amount, ref);
    res.json(wallet);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const refund = async (req: any, res: Response) => {
  try {
    const { amount, ref } = req.body;
    const wallet = await refundMoney(req.user.id, amount, ref);
    res.json(wallet);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const transfer = async (req: any, res: Response) => {
  try {
    const { amount, ref } = req.body;
    const wallet = await transferToBank(req.user.id, amount, ref);
    res.json(wallet);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const get = async (req: any, res: Response) => {
  try {
    const wallet = await getWallet(req.user.id);
    res.json(wallet);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}; 