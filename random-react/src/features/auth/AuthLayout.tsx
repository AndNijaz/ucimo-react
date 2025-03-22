import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-gray-200 p-8 rounded-lg shadow-lg bg-white w-96 mx-auto">
      <div className="border-1 px-4 py-4">{children}</div>
    </div>
  );
}

export default AuthLayout;
