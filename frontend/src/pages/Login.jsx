import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { LoginUser, isAuthenticated } = useContext(AuthProvider);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    await LoginUser(formData);
    // Note: If LoginUser is asynchronous, keeping navigate here is fine,
    // but your useEffect is already handling redirection upon authentication.
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h1 className="text-3xl text-gray-800 font-bold text-center mb-6">
          Welcome Back
        </h1>

        <form onSubmit={SubmitHandler} className="flex flex-col gap-5">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
            />
          </div>

          {/* Password Input */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
            />
          </div>

          <button
            className="w-full py-2.5 mt-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
            type="submit"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
