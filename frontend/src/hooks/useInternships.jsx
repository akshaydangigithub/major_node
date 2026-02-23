import { useEffect, useState } from "react";
import axios from "../utils/axios";

const useInternships = () => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true); // Optional loading state

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get("/api/admin/get-all-internships");
        if (response.data.success) {
          setInternships(response.data.data);
        }
        console.log(response);
      } catch (error) {
        console.error("Error fetching internships:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInternships();
  }, []);

  return { internships };
};

export default useInternships;
