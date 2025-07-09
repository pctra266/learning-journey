import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';

const PhotoPage = () => {
  const [filterType, setFilterType] = useState('album');
  const [queryId, setQueryId] = useState('1');
  const [photos, setPhotos] = useState([]);
  const [start, setStart] = useState(0);
  const limit = 12;
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    fetchPhotos(true);
  }, []);

  const fetchPhotos = async (reset = false) => {
    const params = { _start: reset ? 0 : start, _limit: limit };
    if (filterType === 'album') params.albumId = queryId;
    else params.id = queryId;

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos', { params });
      const data = response.data;
      setPhotos(prev => reset ? data : [...prev, ...data]);
      setStart(prev => reset ? limit : prev + limit);
      setHasMore(data.length === limit);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const handleSearch = () => {
    setStart(0);
    setPhotos([]);
    fetchPhotos(true);
  };

  const handleLoadMore = () => fetchPhotos();

  return (
    <>
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Photos</h1>
        <div className="flex gap-2 mb-6">
          <select
            className="border rounded p-2"
            value={filterType}
            onChange={e => setFilterType(e.target.value)}
          >
            <option value="album">Album Id</option>
            <option value="image">Image Id</option>
          </select>
          <input
            type="number"
            className="border rounded p-2 flex-1"
            placeholder={`Search by ${filterType} id`}
            value={queryId}
            onChange={e => setQueryId(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map(photo => (
            <div key={photo.id} className="border rounded p-2">
              <img src={`https://cataas.com/cat?${photo.id}`} alt={photo.title} className="mb-2 w-full h-32 object-cover rounded" />
              <p className="font-semibold truncate">{photo.title}</p>
              <p className="text-sm">Id: #{photo.id}</p>
              <p className="text-sm">Album Id: #{photo.albumId}</p>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-6">
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              onClick={handleLoadMore}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default PhotoPage;
