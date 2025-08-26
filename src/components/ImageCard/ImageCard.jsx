// import css from "./ImageCard.module.css";

const ImageCard = ({
    src, alt
}) => (
    <div>
        <img src={src} alt={alt} />
    </div>
);

export default ImageCard;
