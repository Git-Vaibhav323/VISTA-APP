import mongoose, { Document, Schema } from 'mongoose';

export type StockStatus = 'in_stock' | 'low' | 'out';

export interface IInventory extends Document {
  itemName: string;
  quantity: number;
  price: number;
  stockStatus: StockStatus;
  expiry: Date;
  owner: mongoose.Types.ObjectId; // vendor or supplier
}

const InventorySchema = new Schema<IInventory>({
  itemName: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  stockStatus: { type: String, enum: ['in_stock', 'low', 'out'], required: true },
  expiry: { type: Date },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model<IInventory>('Inventory', InventorySchema); 