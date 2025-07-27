import User, { IUser } from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const registerUser = async (userData: Partial<IUser>) => {
  // Mock: always return null or a fake user
  const existing = null;
  if (existing) throw new Error('User already exists');
  const hashed = await bcrypt.hash(userData.password!, 10);
  // Mock: return a fake user object
  const user = { ...userData, password: hashed, id: 'demo' };
  return user;
};

export const loginUser = async (emailOrPhone: string, password: string) => {
  // Mock: always return a fake user and token for demo mode
  if (
    (emailOrPhone === "vendor@example.com" || emailOrPhone === "9999999999") &&
    password === "test1234"
  ) {
    const user = {
      id: "demo",
      name: "Test Vendor",
      email: "vendor@example.com",
      phone: "9999999999",
      role: "vendor"
    };
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "7d" });
    return { user, token };
  }
  throw new Error("Invalid credentials (demo mode)");
}; 