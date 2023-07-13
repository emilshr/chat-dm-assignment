import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { AuthWrapper } from "./components/AuthWrapper.tsx";
import { SignUp } from "./features/SignUp.tsx";
import { Login } from "./features/Login.tsx";
import { HomePage } from "./features/Home.tsx";

export const RootNavigator = () => {
  return (
    <Routes>
      <Route Component={App} path="/" />
      <Route Component={SignUp} path="/sign-up" />
      <Route Component={Login} path="/login" />
      <Route Component={HomePage} path="/home" />
    </Routes>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <AuthWrapper>
        <RootNavigator />
      </AuthWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
