import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./features/auth/pages/login/LoginPage";
import { RegistrationPage } from "./features/auth/pages/registration/RegistrationPage";

export const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/register", element: <RegistrationPage />}
]);
