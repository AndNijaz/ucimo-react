import React from "react";
import { Link } from "react-router-dom";

function LinkButton({ to, onClick, children }) {
  return (
    <Link
      onClick={onClick}
      to={to}
      className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
    >
      {children}
    </Link>
  );
}

export default LinkButton;
