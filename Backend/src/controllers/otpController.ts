import { Request, Response } from 'express';
import { sendOTP, verifyOTP } from '../services/otpService';

export const send = async (req: Request, res: Response) => {
  try {
    const { phone } = req.body;
    await sendOTP(phone);
    res.json({ message: 'OTP sent' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const verify = (req: Request, res: Response) => {
  try {
    const { phone, otp } = req.body;
    const valid = verifyOTP(phone, otp);
    if (!valid) return res.status(400).json({ message: 'Invalid or expired OTP' });
    res.json({ message: 'OTP verified' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}; 