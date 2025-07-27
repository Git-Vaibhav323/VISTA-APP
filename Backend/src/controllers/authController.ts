import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';

export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({ user });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { emailOrPhone, password } = req.body;
    const { user, token } = await loginUser(emailOrPhone, password);
    res.json({ user, token });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}; 