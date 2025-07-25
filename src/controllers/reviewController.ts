import { Request, Response } from 'express';
import { addReview, getOrderReviews, getUserReviews } from '../services/reviewService';

export const createReview = async (req: any, res: Response) => {
  try {
    const { order, rating, comment } = req.body;
    const review = await addReview(req.user.id, order, rating, comment);
    res.status(201).json(review);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getReviewsForOrder = async (req: Request, res: Response) => {
  try {
    const reviews = await getOrderReviews(req.params.orderId);
    res.json(reviews);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getReviewsForUser = async (req: Request, res: Response) => {
  try {
    const reviews = await getUserReviews(req.params.userId);
    res.json(reviews);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}; 