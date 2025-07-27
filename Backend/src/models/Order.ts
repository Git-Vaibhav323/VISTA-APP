import mongoose, { Document, Schema } from 'mongoose';

export type OrderStatus = 'pending' | 'confirmed' | 'delivered' | 'cancelled';

export interface IOrder extends Document {
  items: Array<{
    inventory: mongoose.Types.ObjectId;
    quantity: number;
  }>;
  status: OrderStatus;
  supplierId: mongoose.Types.ObjectId;
  vendorIds: mongoose.Types.ObjectId[];
  otp: string;
  deliveryLog: mongoose.Types.ObjectId[];
  groupOrder?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>({
  items: [
    {
      inventory: { type: Schema.Types.ObjectId, ref: 'Inventory', required: true },
      quantity: { type: Number, required: true },
    },
  ],
  status: { type: String, enum: ['pending', 'confirmed', 'delivered', 'cancelled'], default: 'pending' },
  supplierId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  vendorIds: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  otp: { type: String },
  deliveryLog: [{ type: Schema.Types.ObjectId, ref: 'DeliveryLog' }],
  groupOrder: { type: Schema.Types.ObjectId, ref: 'GroupOrder' },
}, { timestamps: true });

export default mongoose.model<IOrder>('Order', OrderSchema); 