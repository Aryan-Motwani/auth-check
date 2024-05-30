import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";

function Routess() {
  return (
    <Routes>
      {/* Default route for "/" */}
      <Route path="/" element={<SignIn />} />

      {/* Routes for signup and profile accessible from any path */}
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<SignIn />} />
      <Route path="profile" element={<UserProfile />} />
    </Routes>
  );
}

export default Routess;
