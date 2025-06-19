// src/components/ImageSelector.tsx
import { useState } from 'react';

type Image = {
  id: string;
  url: string;
  alt: string;
};

interface Props {
  query: string;
  onSelect: (image: Image) => void;
}

export default function ImageSelector({ query, onSelect }: Props) {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=FFYq0bk2LYCdkEfNY3vH3BWF81Bxg3iG9z_Z8384KPc`
      );
      const data = await res.json();
      const formatted = data.results.map((img: any) => ({
        id: img.id,
        url: img.urls.small,
        alt: img.alt_description || 'image',
      }));
      setImages(formatted);
    } catch (err) {
      console.error("Image fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <button
        onClick={fetchImages}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? 'Loading...' : `Find images for "${query}"`}
      </button>

      <div className="grid grid-cols-3 gap-3">
        {images.map((img) => (
          <div
            key={img.id}
            className="w-full h-[120px] overflow-hidden rounded cursor-pointer"
            onClick={() => onSelect(img)}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover hover:opacity-80 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
