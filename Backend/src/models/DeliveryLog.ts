import mongoose, { Document, Schema } from 'mongoose';

export type DeliveryStatus = 'pending' | 'in_transit' | 'delivered' | 'failed';

export interface IDeliveryLog extends Document {
  orderId: mongoose.Types.ObjectId;
  status: DeliveryStatus;
  timestamps: Array<{
    status: DeliveryStatus;
    time: Date;
  }>;
  routeInfo?: string;
}

const DeliveryLogSchema = new Schema<IDeliveryLog>({
  orderId: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  status: { type: String, enum: ['pending', 'in_transit', 'delivered', 'failed'], required: true },
  timestamps: [
    {
      status: { type: String, enum: ['pending', 'in_transit', 'delivered', 'failed'], required: true },
      time: { type: Date, default: Date.now },
    },
  ],
  routeInfo: { type: String },
});

export default mongoose.model<IDeliveryLog>('DeliveryLog', DeliveryLogSchema); 