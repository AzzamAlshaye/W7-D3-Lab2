// src/components/HomePage.jsx
import React from "react";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="bg-neutral-100 text-neutral-950 h-screen flex flex-col justify-center items-center px-6 lg:px-80 space-y-6">
        <h1 className="text-5xl font-bold">Welcome to Wikipedia</h1>
        <p className="text-lg max-w-2xl text-center text-neutral-500">
          The free encyclopedia that anyone can edit. Explore millions of
          articles — written collaboratively by volunteers around the world.
        </p>
        <Link
          to="/articles"
          className="inline-block mt-4 bg-white hover:bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg transition"
        >
          Read Articles
        </Link>
      </section>
    </main>
  );
}
