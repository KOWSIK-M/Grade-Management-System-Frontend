import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";
import VerifyInfo from "./auth/VerifyInfo";
import EmailVerificationPage from "./auth/VerifyEmail";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import Dashboard from "./dashboard/Dashboard";
import AddQuestion from "./dashboard/AddQuestion";
import AllQuestions from "./dashboard/AllQuestions";
import Profile from "./dashboard/Profile";
import MyQuestions from "./dashboard/MyQuestions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/verify-info" element={<VerifyInfo />} />
      <Route path="/verify-email" element={<EmailVerificationPage />} />
      <Route path="/addq" element={<AddQuestion />} />
      <Route path="/allq" element={<AllQuestions />} />
      <Route path="/myq" element={<MyQuestions />} />
      <Route path="/forgotpwd" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
