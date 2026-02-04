import axios from "axios";

// const BASE_URL = "https://storybook-render-backend.onrender.com";
const BASE_URL = "http://localhost:3000";
export const createRazorpayOrder = async (req_id, amount) => {
  const res = await axios.post(`${BASE_URL}/api/payment/create-order`, {
    req_id,
    amount,
  });
  return res.data;
};

export const verifyRazorpayPayment = async (payload) => {
  const res = await axios.post(`${BASE_URL}/api/payment/verify`, payload);
  return res.data;
};

export const getPaymentStatus = async (req_id) => {
  const res = await axios.get(`${BASE_URL}/api/payment/status`, {
    params: { req_id },
  });
  return res.data;
};
