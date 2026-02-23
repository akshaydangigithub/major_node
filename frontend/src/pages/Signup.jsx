import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    phone: "",
    gender: "",
    role: "",
  });

  const navigate = useNavigate();

  const { RegisterUser } = React.useContext(AuthProvider);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();

    await RegisterUser(formData);

    navigate("/login");
  };

  return (
    <div className="flex items-center flex-col gap-10 justify-center h-screen">
      <h1 className="text-2xl text-black font-semibold">Signup</h1>
      <form onSubmit={SubmitHandler} className="flex flex-col gap-3">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Enter your email"
        />
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="******"
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          type="number"
          placeholder="Enter your phone number"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="employee">Employer</option>
          <option value="admin">Admin</option>
        </select>

        {/* if dont have an account */}
        <div className="text-center">
          <p className="text-gray-600">
            {" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Already have an account? Login
            </Link>
          </p>
        </div>

        <button className="p-2.5 bg-amber-500 rounded-lg" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
