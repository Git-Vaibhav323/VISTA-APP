import { Request, Response } from 'express';
import { createCoupon, validateCoupon, applyCoupon, getSupplierCoupons } from '../services/couponService';

export const create = async (req: any, res: Response) => {
  try {
    const { code, expiry } = req.body;
    const supplier = req.user.id;
    const coupon = await createCoupon(code, expiry, supplier);
    res.status(201).json(coupon);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const validate = async (req: Request, res: Response) => {
  try {
    const { code, supplier } = req.body;
    const coupon = await validateCoupon(code, supplier);
    res.json(coupon);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const apply = async (req: Request, res: Response) => {
  try {
    const { code, supplier } = req.body;
    const coupon = await applyCoupon(code, supplier);
    res.json(coupon);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const list = async (req: any, res: Response) => {
  try {
    const coupons = await getSupplierCoupons(req.user.id);
    res.json(coupons);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}; 