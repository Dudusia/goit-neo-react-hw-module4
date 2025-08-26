import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ handleClick }) => (
  <button className={css.button} onClick={handleClick}>
    Load more
  </button>
);

export default LoadMoreBtn;
