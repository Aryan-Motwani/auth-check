// src/components/LogoutButton.js
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
// import { useNavigate } from "react-router-dom";

function LogoutButton() {
  //   const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully");
      //   location.href = "/signin"); // Redirect to sign-in page after logout
    } catch (error) {
      alert(error.message);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;
