import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../api/user";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Assuming your route is set up like: /reset-password/:token
  const { token } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match before sending to backend
    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match." });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    await resetPassword(token, formData.password);

    setMessage({
      type: "success",
      text: "Your password has been reset successfully. Redirecting to login...",
    });

    setIsLoading(false);

    // Redirect to login after a short delay to show the success message
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  // Shared Tailwind classes
  const inputClasses =
    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h1 className="text-2xl text-gray-800 font-bold text-center mb-2">
          Set New Password
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Please enter your new password below.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* New Password */}
          <div>
            <label className={labelClasses}>New Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="••••••••"
              required
              minLength="6"
              className={inputClasses}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className={labelClasses}>Confirm New Password</label>
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              type="password"
              placeholder="••••••••"
              required
              minLength="6"
              className={inputClasses}
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

          {/* Submit Button */}
          <button
            disabled={isLoading || message?.type === "success"}
            className="w-full py-2.5 mt-2 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
            type="submit"
          >
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        {/* Back to Login */}
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

export default ResetPassword;
