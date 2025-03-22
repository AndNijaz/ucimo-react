import React from "react";
import { Outlet } from "react-router";
import AuthLayout from "../features/auth/AuthLayout";

function AuthPage() {
  return (
    <section id="auth-layout" className="py-36 bg-blue-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <AuthLayout>
            <Outlet />
          </AuthLayout>
        </div>
      </div>
    </section>
  );
}

export default AuthPage;
