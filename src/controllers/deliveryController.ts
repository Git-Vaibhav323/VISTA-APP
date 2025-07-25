import { Request, Response } from 'express';
import { addDeliveryLog, getDeliveryLog } from '../services/deliveryService';

export const updateDeliveryStatus = async (req: any, res: Response) => {
  try {
    const { status, routeInfo } = req.body;
    const log = await addDeliveryLog(req.params.orderId, status, routeInfo);
    res.json(log);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getLog = async (req: any, res: Response) => {
  try {
    const log = await getDeliveryLog(req.params.orderId);
    res.json(log);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}; 