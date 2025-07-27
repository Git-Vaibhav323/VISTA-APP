import mongoose, { Document, Schema } from 'mongoose';

export interface IGroupOrder extends Document {
  supplier: mongoose.Types.ObjectId;
  vendors: mongoose.Types.ObjectId[];
  sharedQuantity: number;
  discount: number;
  orderIds: mongoose.Types.ObjectId[];
}

const GroupOrderSchema = new Schema<IGroupOrder>({
  supplier: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  vendors: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  sharedQuantity: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  orderIds: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
});

export default mongoose.model<IGroupOrder>('GroupOrder', GroupOrderSchema); 