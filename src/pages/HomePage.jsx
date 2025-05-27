// src/components/HomePage.jsx
import React from "react";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 text-white h-screen flex flex-col justify-center items-center px-6 lg:px-80 space-y-6">
        <h1 className="text-5xl font-bold">
          Discover Amazing Finds at Shopful
        </h1>
        <p className="text-lg max-w-2xl text-center">
          Dive into our curated collection of top-quality products—from
          electronics and fashion to home goods and beyond. Shop smart and save
          big with unbeatable deals and fast delivery.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-lg transition"
        >
          Start Shopping
        </Link>
      </section>
    </main>
  );
}
