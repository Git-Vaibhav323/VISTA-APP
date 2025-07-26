// Demo OTP service - no external dependencies required
const otpStore: Record<string, { otp: string; expires: number }> = {};

export const sendOTP = async (phone: string) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[phone] = { otp, expires: Date.now() + 5 * 60 * 1000 };
  console.log(`📱 Demo OTP sent to ${phone}: ${otp}`);
  return true;
};

export const verifyOTP = (phone: string, otp: string) => {
  const record = otpStore[phone];
  if (!record) return false;
  if (record.otp !== otp) return false;
  if (Date.now() > record.expires) return false;
  delete otpStore[phone];
  return true;
}; 