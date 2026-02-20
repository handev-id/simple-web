"use client";

import { Edit2, Trash2 } from "lucide-react";

interface Blog {
  id: number;
  category: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

interface BlogTableProps {
  blogs: Blog[];
  onEdit: (blog: Blog) => void;
  onDelete: (id: number) => void;
}

export default function BlogTable({ blogs, onEdit, onDelete }: BlogTableProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  return (
    <div className="bg-white border border-neutral-200">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-neutral-50 border-b border-neutral-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900">
                Judul
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900">
                Kategori
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900">
                Tanggal
              </th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-neutral-900">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {blogs.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-12 text-center text-neutral-600"
                >
                  Belum ada blog
                </td>
              </tr>
            ) : (
              blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-neutral-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-neutral-900">
                      {blog.title}
                    </div>
                    <div className="text-sm text-neutral-600 mt-1 line-clamp-2">
                      {stripHtml(blog.content).substring(0, 100)}...
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-900 text-sm">
                      {blog.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600">
                    {formatDate(blog.created_at)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => onEdit(blog)}
                        className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onDelete(blog.id)}
                        className="p-2 text-neutral-600 hover:text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
