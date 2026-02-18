import React, { useContext, useEffect } from "react";
import { AuthProvider } from "../context/AuthContext";

const Home = () => {
  const { user, isAuthenticated } = useContext(AuthProvider);

  console.log(user, isAuthenticated);

  return <div>Home</div>;
};

export default Home;
