import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserPhotoAlbum = ({ album }) => {
  const { id: userId } = useParams();
  const [albums, setAlbums] = useState(album || []);
  const [newTitle, setNewTitle] = useState('');

  // Sync local state when parent prop changes
  useEffect(() => {
    if (album) setAlbums(album);
  }, [album]);

  // Add new album
  const handleAddAlbum = async () => {
    const title = newTitle.trim();
    if (!title) return;

    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/albums',
        { title, userId: Number(userId) }
      );
      // Fake API returns a new id, so append it
      setAlbums(prev => [...prev, response.data]);
      setNewTitle('');
    } catch (error) {
      console.error('Error adding album:', error);
    }
  };

  // Delete album
  const handleDeleteAlbum = async (id) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/albums/${id}`
      );
      setAlbums(prev => prev.filter(a => a.id !== id));
    } catch (error) {
      console.error('Error deleting album:', error);
    }
  };

  if (!albums) {
    return <p>Loading albums...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Photo Albums:</h1>

      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          className="border rounded p-2 flex-1"
          type="text"
          placeholder="Title of new album"
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
        />
        <button
          className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
          onClick={handleAddAlbum}
        >
          New Album
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {albums.map((alb, index) => (
          <div
            key={alb.id}
            className="flex items-center justify-between border rounded p-2"
          >
            <div className="flex gap-2">
              {/* sequence number based on position */}
              <span className="w-6">{index + 1}</span>
              <span className="font-semibold">{alb.title}</span>
            </div>
            <button
              className="bg-red-500 text-white px-2 rounded hover:bg-red-600"
              onClick={() => handleDeleteAlbum(alb.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPhotoAlbum;
