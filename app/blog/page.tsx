"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

interface Blog {
  id: number;
  category: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
    });
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-neutral-900 flex items-center justify-center">
        <div className="text-neutral-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <main className="mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-20 pt-14">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
            Blog
          </p>
          <h1 className="text-4xl font-semibold text-neutral-900">
            Insight terbaru seputar produk digital.
          </h1>
          <p className="text-sm text-neutral-600">
            Kumpulan catatan praktis dari tim strategi, desain, dan engineering
            kami.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {blogs.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="flex h-full flex-col border border-neutral-200 bg-neutral-50 p-6 transition hover:border-neutral-900"
            >
              <div className="flex items-center justify-between text-xs text-neutral-600">
                <span className="bg-neutral-900 px-3 py-1 font-semibold text-white">
                  {post.category}
                </span>
                <span>{formatDate(post.created_at)}</span>
              </div>
              <h2 className="mt-3 text-xl font-semibold text-neutral-900">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-neutral-600 line-clamp-3">
                {stripHtml(post.content).substring(0, 150)}...
              </p>
              <div className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-neutral-900 transition hover:text-neutral-600">
                Read more
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
