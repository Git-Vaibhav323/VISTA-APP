import Review, { IReview } from '../models/Review';

export const classifySentiment = async (comment: string): Promise<'positive' | 'neutral' | 'negative'> => {
  // Mock: Always return 'neutral' for local/dev
  return 'neutral';
};

export const addReview = async (user: string, order: string, rating: number, comment: string) => {
  const sentiment = await classifySentiment(comment);
  const review = new Review({ user, order, rating, comment, sentiment });
  await review.save();
  return review;
};

export const getOrderReviews = async (order: string) => {
  return Review.find({ order }).populate('user');
};

export const getUserReviews = async (user: string) => {
  return Review.find({ user }).populate('order');
}; 