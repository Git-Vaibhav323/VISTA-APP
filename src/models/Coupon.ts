import mongoose, { Document, Schema } from 'mongoose';

export interface ICoupon extends Document {
  code: string;
  expiry: Date;
  usageCount: number;
  supplier: mongoose.Types.ObjectId;
}

const CouponSchema = new Schema<ICoupon>({
  code: { type: String, required: true, unique: true },
  expiry: { type: Date, required: true },
  usageCount: { type: Number, default: 0 },
  supplier: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model<ICoupon>('Coupon', CouponSchema); 