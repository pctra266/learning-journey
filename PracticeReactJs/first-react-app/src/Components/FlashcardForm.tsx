// src/components/FlashcardForm.tsx
import { useState } from 'react';
import ImageSelector from './ImageSelector';

type Image = {
    id: string;
    url: string;
    alt: string;
  };

export default function FlashcardForm() {
  const [term, setTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState<Image>();

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Enter flashcard term"
        className="border p-2 w-full"
      />

      <ImageSelector query={term} onSelect={(img) => setSelectedImage(img)} />

      {selectedImage && (
        <div>
          <p>Selected Image:</p>
          <img src={selectedImage.url} alt="Selected" className="w-32 h-auto" />
          <p>{selectedImage.url}</p>
          <p>{selectedImage.id}</p>
          <p>{selectedImage.alt}</p>
        </div>
        
      )}
    </div>
  );
}
