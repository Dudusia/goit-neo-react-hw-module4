import css from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { ClipLoader } from 'react-spinners';
import { fetchImages } from '../../services/imagesService';
import { useState, useEffect } from 'react';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchTopic, setSearchTopic] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModal, setIsModal] = useState(false);

  const handleSearch = topic => {
    setSearchTopic(topic);
    setCurrentPage(1);
    setImages([]);
  };

  const changePage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (searchTopic === '') {
      return;
    }

    async function getImages() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages(searchTopic, currentPage);
        setImages(prevState => [...prevState, ...data.results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getImages();
  }, [currentPage, searchTopic]);

  const handleImageSelect = image => {
    setSelectedImage(image);
    setIsModal(true);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setIsModal(false);
  };

  return (
    <div className={css['container']}>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} handleClick={handleImageSelect} />
      )}
      {isLoading && <ClipLoader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn handleClick={changePage} />
      )}
      {selectedImage !== null && (
        <ImageModal
          image={selectedImage}
          modalIsOpen={isModal}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default App;
