import GroupOrder, { IGroupOrder } from '../models/GroupOrder';

export const createGroupOrder = async (supplier: string, vendors: string[], sharedQuantity: number, discount: number, orderIds: string[]) => {
  const groupOrder = new GroupOrder({ supplier, vendors, sharedQuantity, discount, orderIds });
  await groupOrder.save();
  return groupOrder;
};

export const addOrderToGroup = async (groupOrderId: string, orderId: string) => {
  return GroupOrder.findByIdAndUpdate(groupOrderId, { $push: { orderIds: orderId } }, { new: true });
};

export const getGroupOrder = async (groupOrderId: string) => {
  return GroupOrder.findById(groupOrderId).populate('supplier vendors orderIds');
};

export const getSupplierGroupOrders = async (supplier: string) => {
  return GroupOrder.find({ supplier }).populate('vendors orderIds');
}; 