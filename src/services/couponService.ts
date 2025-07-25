import Coupon from '../models/Coupon';
import { Types } from 'mongoose';

export const createCoupon = async (code: string, expiry: Date, supplier: string, usageCount: number = 0) => {
  const coupon = new Coupon({ code, expiry, supplier, usageCount });
  await coupon.save();
  return coupon;
};

export const validateCoupon = async (code: string, supplier: string) => {
  const coupon = await Coupon.findOne({ code, supplier });
  if (!coupon) throw new Error('Coupon not found');
  if (coupon.expiry < new Date()) throw new Error('Coupon expired');
  return coupon;
};

export const applyCoupon = async (code: string, supplier: string) => {
  const coupon = await validateCoupon(code, supplier);
  coupon.usageCount += 1;
  await coupon.save();
  return coupon;
};

export const getSupplierCoupons = async (supplier: string) => {
  return Coupon.find({ supplier });
}; 