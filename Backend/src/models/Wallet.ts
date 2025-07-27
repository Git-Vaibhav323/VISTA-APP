import mongoose, { Document, Schema } from 'mongoose';

export interface IWallet extends Document {
  user: mongoose.Types.ObjectId;
  balance: number;
  transactions: Array<{
    type: 'load' | 'refund' | 'transfer';
    amount: number;
    date: Date;
    ref?: string;
  }>;
}

const WalletSchema = new Schema<IWallet>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
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
});

export default mongoose.model<IWallet>('Wallet', WalletSchema); 