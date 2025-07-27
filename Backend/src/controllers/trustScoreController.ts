import { Request, Response } from 'express';
import { calculateTrustScore } from '../services/trustScoreService';

export const getTrustScore = async (req: any, res: Response) => {
  try {
    const userId = req.params.userId || req.user.id;
    const trustScore = await calculateTrustScore(userId);
    res.json({ userId, trustScore });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}; 