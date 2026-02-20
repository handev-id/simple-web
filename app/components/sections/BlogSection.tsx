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

export default function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.slice(0, 3));
      })
      .catch((err) => console.error(err));
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
            Insight
          </p>
          <h2 className="text-3xl font-semibold text-neutral-900">
            Artikel terbaru dari tim.
          </h2>
        </div>
        <Link
          href="/blog"
          className="hidden border border-neutral-300 px-4 py-2.5 text-sm font-semibold text-neutral-900 transition hover:border-neutral-900 md:inline-flex"
        >
          View all
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {blogs.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="border border-neutral-200 bg-white p-5 transition hover:border-neutral-900"
          >
            <div className="flex items-center justify-between text-xs text-neutral-600">
              <span className="bg-neutral-100 px-3 py-1 font-semibold text-neutral-800">
                {post.category}
              </span>
              <span>{formatDate(post.created_at)}</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-neutral-900">
              {post.title}
            </h3>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 transition hover:text-neutral-600">
              Read more
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
