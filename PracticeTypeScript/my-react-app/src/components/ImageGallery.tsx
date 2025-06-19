import React, { useEffect, useState } from "react";

interface ImageData {
  id: number;
  title: string;
  data: string;
}

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/images")
      .then((res) => res.json())
      .then(setImages);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {images.map((img) => (
        <div key={img.id} className="border p-2 rounded">
          <p className="text-sm font-semibold mb-2">{img.title}</p>
          <img src={img.data} alt={img.title} className="max-h-40 mx-auto" />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
