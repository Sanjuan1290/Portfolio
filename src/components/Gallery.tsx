import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

type GalleryImage = {
  name: string;
  url: string;
};

const Gallery: React.FC = () => {
  const { ref: sectionRef, visible } = useScrollAnimation();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase.storage.from("gallery").list("", {
        sortBy: { column: "created_at", order: "desc" },
      });

      if (error || !data) { setLoading(false); return; }

      const urls = data
        .filter((f) => f.name !== ".emptyFolderPlaceholder")
        .map((file) => ({
          name: file.name,
          url: supabase.storage.from("gallery").getPublicUrl(file.name).data.publicUrl,
        }));

      setImages(urls);
      setLoading(false);
    };

    fetchImages();
  }, []);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-10"
      id="gallery"
    >
        <h1 className="text-center font-bold text-4xl mb-8">Gallery</h1>
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : images.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <p className="text-5xl mb-4">🖼️</p>
          <p className="text-lg">No images yet.</p>
        </div>
      ) : (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-6xl mx-auto px-4">
          {images.map((img, i) => (
            <div
              key={img.name}
              onClick={() => setLightbox(img.url)}
              className={`break-inside-avoid rounded-xl overflow-hidden cursor-pointer group scroll-hidden-scale ${visible ? "scroll-visible" : ""}`}
              style={{ transitionDelay: visible ? `${i * 60}ms` : "0ms" }}
            >
              <img
                src={img.url}
                alt={img.name}
                className="w-full object-cover group-hover:scale-105 transition duration-300 group-hover:brightness-90"
              />
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-8 text-white text-4xl hover:text-pink-400 transition"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <img
            src={lightbox}
            alt="preview"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;