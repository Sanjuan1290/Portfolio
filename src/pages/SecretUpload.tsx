import React, { useState, useCallback } from "react";
import { supabase } from "../lib/supabase";

type UploadFile = {
  file: File;
  preview: string;
  status: "idle" | "uploading" | "done" | "error";
};

const SecretUpload: React.FC = () => {
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [dragging, setDragging] = useState(false);

  const addFiles = (incoming: File[]) => {
    const images = incoming.filter((f) => f.type.startsWith("image/"));
    const mapped: UploadFile[] = images.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      status: "idle",
    }));
    setFiles((prev) => [...prev, ...mapped]);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    addFiles(Array.from(e.dataTransfer.files));
  }, []);

  const onFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addFiles(Array.from(e.target.files));
  };

  const removeFile = (i: number) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== i));
  };

  const uploadAll = async () => {
    for (let i = 0; i < files.length; i++) {
      if (files[i].status === "done") continue;

      setFiles((prev) =>
        prev.map((f, idx) => idx === i ? { ...f, status: "uploading" } : f)
      );

      const ext = files[i].file.name.split(".").pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;

      const { error } = await supabase.storage
        .from("gallery")
        .upload(fileName, files[i].file, { upsert: false });

      setFiles((prev) =>
        prev.map((f, idx) =>
          idx === i ? { ...f, status: error ? "error" : "done" } : f
        )
      );
    }
  };

  const clearDone = () => setFiles((prev) => prev.filter((f) => f.status !== "done"));

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col items-center px-6 py-16">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">
          🔒 <span className="text-pink-400">Secret</span> Upload
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Images uploaded here appear in the Gallery tab.
        </p>
      </div>

      {/* Drop Zone */}
      <div
        onDrop={onDrop}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        className={`w-full max-w-2xl border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-200 cursor-pointer ${
          dragging
            ? "border-pink-500 bg-pink-500/10 scale-105"
            : "border-gray-700 bg-gray-900/40 hover:border-pink-500/50 hover:bg-gray-900/60"
        }`}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        <p className="text-5xl mb-4">📁</p>
        <p className="text-gray-300 font-semibold">Drag & drop images here</p>
        <p className="text-gray-600 text-sm mt-1">or click to browse</p>
        <input
          id="fileInput"
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={onFileInput}
        />
      </div>

      {/* Preview Grid */}
      {files.length > 0 && (
        <div className="w-full max-w-2xl mt-8">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-400 text-sm">
              {files.length} image{files.length > 1 ? "s" : ""} selected
            </p>
            <button
              onClick={clearDone}
              className="text-xs text-gray-500 hover:text-gray-300 transition"
            >
              Clear uploaded
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {files.map((f, i) => (
              <div key={i} className="relative group rounded-xl overflow-hidden bg-gray-800">
                <img src={f.preview} alt="" className="w-full h-36 object-cover" />

                {f.status === "uploading" && (
                  <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-2">
                    <div className="w-8 h-8 border-2 border-pink-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs text-white">Uploading…</span>
                  </div>
                )}
                {f.status === "done" && (
                  <div className="absolute inset-0 bg-green-900/60 flex items-center justify-center text-3xl">✅</div>
                )}
                {f.status === "error" && (
                  <div className="absolute inset-0 bg-red-900/60 flex items-center justify-center text-3xl">❌</div>
                )}
                {f.status === "idle" && (
                  <button
                    onClick={() => removeFile(i)}
                    className="absolute top-2 right-2 w-6 h-6 bg-black/70 rounded-full text-white text-sm opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
                  >
                    ×
                  </button>
                )}

                <div className="px-2 py-1 bg-black/50 text-xs text-gray-400 truncate">
                  {f.file.name}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={uploadAll}
            disabled={files.every((f) => f.status === "done" || f.status === "uploading")}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Upload to Gallery
          </button>
        </div>
      )}

      <a href="/" className="mt-12 text-gray-600 hover:text-pink-400 text-sm transition">
        ← Back to portfolio
      </a>
    </div>
  );
};

export default SecretUpload;