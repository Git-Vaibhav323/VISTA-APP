import DeliveryLog, { IDeliveryLog, DeliveryStatus } from '../models/DeliveryLog';

export const addDeliveryLog = async (orderId: string, status: string, routeInfo?: string) => {
  return {
    orderId,
    status,
    timestamps: [{ status, time: new Date() }],
    routeInfo: routeInfo || 'Demo route info',
  };
};

export const getDeliveryLog = async (orderId: string) => {
  return {
    orderId,
    status: 'delivered',
    timestamps: [{ status: 'delivered', time: new Date() }],
    routeInfo: 'Demo route info',
  };
}; 