import { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPassword } from "../api/user";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await forgotPassword(email);

    setMessage({
      type: "success",
      text: "If an account with that email exists, a reset link has been sent.",
    });
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h1 className="text-2xl text-gray-800 font-bold text-center mb-2">
          Reset Password
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
            />
          </div>

          {/* Status Message */}
          {message && (
            <div
              className={`p-3 rounded-md text-sm ${message.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}
            >
              {message.text}
            </div>
          )}

          <button
            disabled={isLoading}
            className="w-full py-2.5 mt-2 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
            type="submit"
          >
            {isLoading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {/* Back to Login Link */}
        <div className="text-center mt-6">
          <Link
            to="/login"
            className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            &larr; Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
