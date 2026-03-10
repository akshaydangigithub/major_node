import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    role: "",
  });

  const navigate = useNavigate();
  const { RegisterUser } = useContext(AuthProvider);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    await RegisterUser(formData);
    navigate("/login");
  };

  // Shared Tailwind classes for cleaner JSX
  const inputClasses =
    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 py-10">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h1 className="text-3xl text-gray-800 font-bold text-center mb-6">
          Create an Account
        </h1>

        <form onSubmit={SubmitHandler} className="flex flex-col gap-5">
          {/* Name */}
          <div>
            <label className={labelClasses}>Full Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="e.g., John Doe"
              required
              className={inputClasses}
            />
          </div>

          {/* Email & Phone - Side by side on larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClasses}>Email Address</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="you@example.com"
                required
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses}>Phone Number</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="+1 234 567 8900"
                required
                className={inputClasses}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className={labelClasses}>Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="••••••••"
              required
              className={inputClasses}
            />
          </div>

          {/* Gender & Role - Side by side on larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClasses}>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className={`${inputClasses} bg-white`}
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className={`${inputClasses} bg-white`}
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="student">Student</option>
                <option value="employee">Employer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="w-full py-2.5 mt-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
            type="submit"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
