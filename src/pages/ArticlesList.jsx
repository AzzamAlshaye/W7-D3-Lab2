import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setArticles(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">Loading articles…</p>
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-red-500">
          Error loading articles: {error.message}
        </p>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/articles/${article.id}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col p-6 h-full"
          >
            <img src="News.webp" alt=" news image" className="h-1/2" />
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {article.title}
            </h2>
            <p className="text-gray-600 flex-grow">
              {article.body.length > 100
                ? article.body.substring(0, 100) + "..."
                : article.body}
            </p>
            <span className="mt-4 text-blue-600 font-medium hover:underline">
              Read More →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
