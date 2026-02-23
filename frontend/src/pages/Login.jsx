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

    navigate("/");
  };

  return (
    <div className="flex items-center flex-col gap-10 justify-center h-screen">
      <h1 className="text-2xl text-black font-semibold">Login</h1>
      <form onSubmit={SubmitHandler} className="flex flex-col gap-3">
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

        {/* if dont have an account */}
        <div className="text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>

        <button className="p-2.5 bg-amber-500 rounded-lg" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
