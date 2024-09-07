import React from "react";
import { LoginPage } from "../pages/LoginPage";

export const authRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
];
