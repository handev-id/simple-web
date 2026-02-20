"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import BlogTable from "@/app/components/admin/BlogTable";
import BlogForm from "@/app/components/admin/BlogForm";

interface Blog {
  id: number;
  category: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const authenticate = async () => {
      const pin = prompt("Masukkan PIN Admin:");

      if (!pin) {
        router.push("/");
        return;
      }

      try {
        const response = await fetch("/api/admin/auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pin }),
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          alert("PIN salah!");
          router.push("/");
        }
      } catch (error) {
        console.error("Authentication failed:", error);
        router.push("/");
      }
    };

    authenticate();
  }, [router]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blog");
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchBlogs();
    }
  }, [isAuthenticated]);

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setIsFormOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin ingin menghapus blog ini?")) return;

    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchBlogs();
      }
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };

  const handleFormSuccess = () => {
    setIsFormOpen(false);
    setEditingBlog(null);
    fetchBlogs();
  };

  const handleFormCancel = () => {
    setIsFormOpen(false);
    setEditingBlog(null);
  };

  if (!isAuthenticated || loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-neutral-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">
              Dashboard Blog
            </h1>
            <p className="text-neutral-600 mt-2">Kelola artikel blog Anda</p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 hover:bg-neutral-800 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Tambah Blog
          </button>
        </div>

        {isFormOpen && (
          <div className="mb-8">
            <BlogForm
              blog={editingBlog}
              onSuccess={handleFormSuccess}
              onCancel={handleFormCancel}
            />
          </div>
        )}

        <BlogTable blogs={blogs} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}
