import { useEffect } from "react";
import { storage } from "../utils"; // Ensure this is correctly importing your storage utility
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ element }: { element: React.ReactNode }) => {
  const userToken = storage.getAuthToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userToken) {
      navigate("/login");
    }
  }, [userToken, navigate]);

  // If the user is authenticated, render the children
  return userToken ? element : null; // Return null while redirecting
};

export default PrivateRoute;