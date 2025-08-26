import Modal from 'react-modal';
import css from './ImageModal.module.css';

const ImageModal = ({ image, modalIsOpen, onClose }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onClose}
      preventScroll={true}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.modalOverlay}
    >
      <div className={css.modalContent}>
        <img
          className={css.modalImage}
          src={image.urls.regular}
          alt={image.description}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
