import Wallet from '../models/Wallet';
import User from '../models/User';

export const loadMoney = async (userId: string, amount: number, ref?: string) => {
  return { user: userId, balance: amount, transactions: [{ type: 'load', amount, date: new Date(), ref }] };
};

export const refundMoney = async (userId: string, amount: number, ref?: string) => {
  return { user: userId, balance: amount, transactions: [{ type: 'refund', amount, date: new Date(), ref }] };
};

export const transferToBank = async (userId: string, amount: number, ref?: string) => {
  return { user: userId, balance: 0, transactions: [{ type: 'transfer', amount, date: new Date(), ref }] };
};

export const getWallet = async (userId: string) => {
  return { user: userId, balance: 1000, transactions: [] };
}; 