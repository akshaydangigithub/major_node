import React, { createContext, useEffect, useState } from "react";
export const AuthProvider = createContext();
import axios from "../utils/axios";

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetUserData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/user/me");

      if (res.data.success) {
        setUser(res.data.data);
      } else {
        setUser(null);
      }
    } catch (error) {
      setUser(null);
      const message = error.response?.data?.message || "An error occurred";
      console.error(message);
    } finally {
      setLoading(false);
    }
  };

  const LoginUser = async (data) => {
    try {
      const res = await axios.post("/api/user/signin", data);

      if (res.data.success) {
        await fetUserData();
      }
    } catch (error) {
      const message = error.response?.data?.message || "An error occurred";
      alert(message);
    }
  };

  useEffect(() => {
    fetUserData();
  }, []);

  return (
    <AuthProvider.Provider
      value={{ LoginUser, user, loading, isAuthenticated: !!user }}
    >
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthContext;
