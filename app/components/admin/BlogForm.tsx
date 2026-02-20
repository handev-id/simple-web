"use client";

import { useForm } from "react-hook-form";
import { useState, useRef } from "react";

interface BlogFormData {
  category: string;
  title: string;
  content: string;
}

interface BlogFormProps {
  blog?: {
    id: number;
    category: string;
    title: string;
    content: string;
  } | null;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function BlogForm({ blog, onSuccess, onCancel }: BlogFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BlogFormData>({
    defaultValues: blog
      ? {
          category: blog.category,
          title: blog.title,
          content: blog.content,
        }
      : undefined,
  });
  const [loading, setLoading] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const onSubmit = async (data: BlogFormData) => {
    setLoading(true);
    try {
      const url = blog ? `/api/blog/${blog.id}` : "/api/blog";
      const method = blog ? "PUT" : "POST";

      const contentHTML = contentRef.current?.innerHTML || "";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: data.category,
          title: data.title,
          content: contentHTML,
        }),
      });

      if (response.ok) {
        reset();
        if (contentRef.current) {
          contentRef.current.innerHTML = "";
        }
        onSuccess();
      }
    } catch (error) {
      console.error("Failed to save blog:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 border border-neutral-200">
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">
        {blog ? "Edit Blog" : "Tambah Blog Baru"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-neutral-900 mb-2">
            Kategori
          </label>
          <input
            type="text"
            {...register("category", { required: "Kategori wajib diisi" })}
            className="w-full px-4 py-3 border border-neutral-200 text-neutral-900 focus:outline-none focus:border-neutral-900"
          />
          {errors.category && (
            <p className="text-red-600 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-900 mb-2">
            Judul
          </label>
          <input
            type="text"
            {...register("title", { required: "Judul wajib diisi" })}
            className="w-full px-4 py-3 border border-neutral-200 text-neutral-900 focus:outline-none focus:border-neutral-900"
          />
          {errors.title && (
            <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-900 mb-2">
            Konten
          </label>
          <div className="border border-neutral-200 mb-2">
            <div className="flex gap-2 p-2 border-b border-neutral-200 bg-neutral-50">
              <button
                type="button"
                onClick={() => document.execCommand("bold")}
                className="px-3 py-1 border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100"
              >
                <strong>B</strong>
              </button>
              <button
                type="button"
                onClick={() => document.execCommand("italic")}
                className="px-3 py-1 border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100"
              >
                <em>I</em>
              </button>
              <button
                type="button"
                onClick={() =>
                  document.execCommand("formatBlock", false, "<h2>")
                }
                className="px-3 py-1 border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100"
              >
                H2
              </button>
              <button
                type="button"
                onClick={() =>
                  document.execCommand("formatBlock", false, "<p>")
                }
                className="px-3 py-1 border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100"
              >
                P
              </button>
              <button
                type="button"
                onClick={() => document.execCommand("insertUnorderedList")}
                className="px-3 py-1 border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100"
              >
                UL
              </button>
            </div>
            <div
              ref={contentRef}
              contentEditable
              className="min-h-[300px] p-4 focus:outline-none prose max-w-none text-neutral-900"
              dangerouslySetInnerHTML={
                blog ? { __html: blog.content } : undefined
              }
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-neutral-900 text-white px-6 py-3 hover:bg-neutral-800 transition-colors disabled:opacity-50"
          >
            {loading ? "Menyimpan..." : blog ? "Update" : "Simpan"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="border border-neutral-300 text-neutral-900 px-6 py-3 hover:bg-neutral-50 transition-colors"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}
