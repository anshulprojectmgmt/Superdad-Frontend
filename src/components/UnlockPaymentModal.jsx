import { loadRazorpay } from "../utils/loadRazorpay";
import {
  createRazorpayOrder,
  verifyRazorpayPayment,
} from "../services/paymentApi";

function UnlockPaymentModal({ req_id, amount, onSuccess, onClose }) {
  const startPayment = async () => {
    const razorpayLoaded = await loadRazorpay();
    if (!razorpayLoaded) {
      alert("Razorpay SDK failed to load");
      return;
    }

    const orderRes = await createRazorpayOrder(req_id, amount);

    const options = {
      key: orderRes.key,
      amount: orderRes.order.amount,
      currency: "INR",
      name: "StoryBook",
      description: "Unlock Full Storybook",
      order_id: orderRes.order.id,
      handler: async function (response) {
        await verifyRazorpayPayment({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          req_id,
        });

        onSuccess();
      },
      theme: {
        color: "#2563eb",
      },
      modal: {
        ondismiss: onClose,
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Unlock Full Book</h2>
        <p className="text-gray-600 mb-6">
          Pay once to unlock all pages & download the PDF
        </p>

        <button
          onClick={startPayment}
          className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700"
        >
          Pay {amount} & Unlock
        </button>

        <button
          onClick={onClose}
          className="mt-4 text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default UnlockPaymentModal;
