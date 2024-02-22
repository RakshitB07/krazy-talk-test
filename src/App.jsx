import React from "react";
import "./index.css";
import LandingPage from "./components/LandingPage";
import SignupPage from "./components/SignupPage";
import SigninPage from "./components/SigninPage";
import MainChatPage from "./components/MainChatPage";

function App() {
  return (
    <div className="bg-slate-200">
      {/* <LandingPage />
      <SignupPage />
      <SigninPage /> */}
      <MainChatPage />
    </div>
  );
}

export default App;
