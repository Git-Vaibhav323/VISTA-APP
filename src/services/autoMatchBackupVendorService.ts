import User from '../models/User';
import Inventory from '../models/Inventory';

// Placeholder: In real app, use geolocation and a distance API
const calculateDistance = (vendorA: any, vendorB: any) => {
  // Return a random distance for demo
  return Math.random() * 10;
};

export const autoMatchBackupVendor = async (itemName: string, requiredQty: number, currentVendorId: string) => {
  // Find all vendors with enough stock and not the current vendor
  const inventories = await Inventory.find({
    itemName,
    quantity: { $gte: requiredQty },
  }).populate('owner');

  // Filter out current vendor and sort by trustScore, then distance
  const candidates = inventories
    .filter((inv: any) => inv.owner._id.toString() !== currentVendorId)
    .map((inv: any) => ({
      vendor: inv.owner,
      trustScore: inv.owner.trustScore,
      distance: calculateDistance(inv.owner, currentVendorId),
      inventory: inv,
    }))
    .sort((a, b) => b.trustScore - a.trustScore || a.distance - b.distance);

  return candidates.length > 0 ? candidates[0] : null;
}; 