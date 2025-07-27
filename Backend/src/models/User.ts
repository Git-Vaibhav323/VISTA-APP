import mongoose, { Document, Schema } from 'mongoose';

export type UserRole = 'vendor' | 'supplier';

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: UserRole;
  wallet: {
    balance: number;
    transactions: Array<{
      type: 'load' | 'refund' | 'transfer';
      amount: number;
      date: Date;
      ref?: string;
    }>;
  };
  verified: boolean;
  rating: number;
  trustScore: number;
  hygieneScore?: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['vendor', 'supplier'], required: true },
  wallet: {
    balance: { type: Number, default: 0 },
    transactions: [
      {
        type: {
          type: String,
          enum: ['load', 'refund', 'transfer'],
          required: true,
        },
        amount: { type: Number, required: true },
        date: { type: Date, default: Date.now },
        ref: { type: String },
      },
    ],
  },
  verified: { type: Boolean, default: false },
  rating: { type: Number, default: 0 },
  trustScore: { type: Number, default: 0 },
  hygieneScore: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema); 