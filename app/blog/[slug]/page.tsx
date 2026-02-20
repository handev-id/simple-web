"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface Blog {
  id: number;
  category: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export default function BlogDetailPage() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/api/blog/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setBlog(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [id]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-neutral-900 flex items-center justify-center">
        <div className="text-neutral-600">Loading...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-white text-neutral-900 flex items-center justify-center">
        <div className="text-neutral-600">Blog not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <main className="mx-auto max-w-3xl px-6 pb-20 pt-14">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 transition hover:text-neutral-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <article className="mt-8 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs text-neutral-600">
              <span className="bg-neutral-900 px-3 py-1 font-semibold text-white">
                {blog.category}
              </span>
              <span>{formatDate(blog.created_at)}</span>
            </div>
            <h1 className="text-4xl font-semibold text-neutral-900">
              {blog.title}
            </h1>
          </div>

          <div
            className="prose prose-neutral max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>
      </main>
    </div>
  );
}
