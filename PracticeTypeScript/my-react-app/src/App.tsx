import './App.css'
import ImageUploader from './components/ImageUploader'
import ImageGallery from './components/ImageGallery'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl text-center font-bold pt-6">Image Upload Demo</h1>
      <ImageUploader />
      <ImageGallery />
    </div>
  );
}

export default App
