import React, { useState } from "react";

const ImageUploader: React.FC = () => {
  const [imageData, setImageData] = useState<string | null>(null);
  const [title, setTitle] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImageData(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!imageData || !title) return;

    await fetch("http://localhost:3001/images", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, data: imageData }),
    });

    setImageData(null);
    setTitle("");
    alert("Image uploaded!");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        value={title}
        placeholder="Image Title"
        onChange={(e) => setTitle(e.target.value)}
        className="mb-2 p-2 border w-full rounded"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-2"
      />
      {imageData && (
        <img src={imageData} alt="Preview" className="mb-2 max-h-48 mx-auto" />
      )}
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        Upload Image
      </button>
    </div>
  );
};

export default ImageUploader;
