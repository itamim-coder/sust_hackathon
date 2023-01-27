import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import SignUp from "./components/pages/Mainsite/SignUp";
import Login from "./components/pages/Mainsite/Login";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import header from "./components/Dashboard/Header";
import MobileNav from "./components/Dashboard/MobileNav";
import SideNav from "./components/Dashboard/SideNav";
import Jobs from "./components/pages/Dashboard/Jobs";
import PostJob from "./components/pages/Dashboard/PostJob";
import Profile from "./components/pages/Dashboard/Profile";
import Questions from "./components/pages/Mainsite/Questions";
import Quiz from "./components/pages/Mainsite/Quiz";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
