import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./features/auth/authSlice"; // Import the action if needed

const AuthRedirect = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (!hasRedirected) {
      // Check if the user is authenticated from local storage
      const authState = localStorage.getItem("authState");
      if (authState) {
        const { isAuthenticated } = JSON.parse(authState);
        if (isAuthenticated || authState) {
          dispatch(login(JSON.parse(authState).user)); // Restore user data if needed
          navigate("/dashboard"); // Redirect to dashboard
          setHasRedirected(true); // Mark as redirected
        }
      } else {
        // navigate("/dashboard"); // Redirect to dashboard

        setHasRedirected(true); // If no authState, proceed
      }
    }
  }, [dispatch, navigate, hasRedirected]);

  return null; // This component does not render anything
};

export default AuthRedirect;
