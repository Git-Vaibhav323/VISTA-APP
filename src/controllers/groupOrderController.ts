import { Request, Response } from 'express';
import { createGroupOrder, addOrderToGroup, getGroupOrder, getSupplierGroupOrders } from '../services/groupOrderService';

export const create = async (req: any, res: Response) => {
  try {
    const { supplier, vendors, sharedQuantity, discount, orderIds } = req.body;
    const groupOrder = await createGroupOrder(supplier, vendors, sharedQuantity, discount, orderIds);
    res.status(201).json(groupOrder);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const addOrder = async (req: any, res: Response) => {
  try {
    const { orderId } = req.body;
    const groupOrder = await addOrderToGroup(req.params.groupOrderId, orderId);
    res.json(groupOrder);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const get = async (req: any, res: Response) => {
  try {
    const groupOrder = await getGroupOrder(req.params.groupOrderId);
    res.json(groupOrder);
  } catch (err: any) {
    res.status(404).json({ message: err.message });
  }
};

export const getSupplierGroups = async (req: any, res: Response) => {
  try {
    const groups = await getSupplierGroupOrders(req.params.supplierId);
    res.json(groups);
  } catch (err: any) {
    res.status(404).json({ message: err.message });
  }
}; 