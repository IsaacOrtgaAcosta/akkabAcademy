import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./features/auth/pages/login/LoginPage";
import { PlansPage } from "./features/auth/pages/plans/PlansPage";
import { RegistrationPage } from "./features/auth/pages/registration/RegistrationPage";

export const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  {path: "/plans", element: <PlansPage />},
  { path: "/register", element: <RegistrationPage />}
]);
