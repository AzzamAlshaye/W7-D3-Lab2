import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";

export default function ArticleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setArticle(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">Loading article…</p>
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-red-500">
          Error loading article: {error.message}
        </p>
      </div>
    );
  if (!article)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">No article found.</p>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8 w-full min-h-screen flex flex-col items-center justify-center ">
      <div className="bg-white p-6 rounded-xl shadow-md  ">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          {article.title}
        </h1>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {article.body}
        </p>
        <button
          onClick={() => navigate(-1)}
          className="inline-block mt-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
        >
          ← Back to Articles
        </button>
      </div>
    </div>
  );
}
