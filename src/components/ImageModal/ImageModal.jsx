// import css from "./ImageModal.module.css";
import Modal from "react-modal";


const ImageModal = ({
    image, modalIsOpen, onClose
}) => {
    console.log(image)
    return (
        <Modal 
            isOpen={modalIsOpen}
            preventScroll={true}
            contentLabel="Minimal Modal Example"
            onRequestClose={onClose}
        >
          <img src={image.urls.regular} alt={image.description} />
        </Modal>
);}

export default ImageModal;
