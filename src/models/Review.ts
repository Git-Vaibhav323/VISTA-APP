import mongoose, { Document, Schema } from 'mongoose';

export interface IReview extends Document {
  user: mongoose.Types.ObjectId;
  order: mongoose.Types.ObjectId;
  rating: number;
  comment: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  createdAt: Date;
}

const ReviewSchema = new Schema<IReview>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  sentiment: { type: String, enum: ['positive', 'neutral', 'negative'], required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IReview>('Review', ReviewSchema); 