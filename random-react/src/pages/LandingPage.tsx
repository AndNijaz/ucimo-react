import React from "react";
import { Link } from "react-router";

function LandingPage() {
  return (
    <section id="cta" className="py-36 bg-red-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ready to dive in?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Start your free trial today.
          </p>
          <Link
            to="/login"
            className="mt-8 inline-block bg-red-500 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-red-600"
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
