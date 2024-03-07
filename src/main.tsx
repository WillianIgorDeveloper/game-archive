import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OnlyPublicRoutes, PrivateRoutes } from "@/middleware";
import { ROUTES } from "@/utils/routes";
// Styles / UI
import "./index.css";
import { Toaster } from "@/presentation/components/ui/toaster";
// Tanstack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

// ---- Pages
// Public
import { HomePage } from "@/presentation/pages/home";
import { NotFoundPage } from "@/presentation/pages/notfound";
// Only Public
import { SignInPage } from "@/presentation/pages/signin";
import { SignUpPage } from "@/presentation/pages/signup";
// Private
import { AppPage } from "@/presentation/pages/app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route element={<OnlyPublicRoutes />}>
            <Route path={ROUTES.SIGNIN} element={<SignInPage />} />
            <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path={ROUTES.APP} element={<AppPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    <Toaster />
  </React.StrictMode>
);
