import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, handleClick }) => {
  return (
    <ul className={css['images-list']}>
      {images.map(image => (
        <li
          key={image.id}
          className={css['image-item']}
          onClick={() => handleClick(image)}
        >
          <ImageCard src={image.urls.small} alt={image.description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
