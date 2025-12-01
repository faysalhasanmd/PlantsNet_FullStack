import axios from "axios";
import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) return; // ❗ ইম্পর্টেন্ট চেক

    const sendPaymentSuccess = async () => {
      try {
        const res = await axios.post("http://localhost:3000/payment-success", {
          sessionId,
        });
        console.log("Payment success response:", res.data);
      } catch (error) {
        console.error("Payment success error:", error);
      }
    };

    sendPaymentSuccess();
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-10 text-center">
        {/* Big Checkmark Circle */}
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been confirmed.
        </p>

        {/* Buttons */}
        <div className="">
          <Link
            to="/dashboard/my-orders"
            className="py-4 px-8 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition"
          >
            Go To MyOrder
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
