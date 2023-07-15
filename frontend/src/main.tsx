import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthWrapper } from "./components/AuthWrapper.tsx";
import { Login } from "./features/Login.tsx";
import { HomePage } from "./features/Home.tsx";
import { Requests } from "./features/Requests.tsx";
import { NewChat } from "./features/NewChat.tsx";
import { Registration } from "./features/Registration.tsx";

export const RootNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/inbox" />} />
      <Route Component={HomePage} path="/inbox/:inboxId?" />
      <Route Component={Requests} path="/requests" />
      <Route Component={Login} path="/login" />
      <Route Component={Registration} path="/signUp" />
      <Route Component={NewChat} path="/newInbox" />
    </Routes>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <AuthWrapper>
        <div className="w-screen h-screen">
          <RootNavigator />
        </div>
      </AuthWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
