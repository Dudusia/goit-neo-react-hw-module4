import css from './SearchBar.module.css';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = formData => {
    const topic = formData.get('search').trim();
    if (topic === '') {
      toast.error('Search cannot be empty');
      return;
    }
    onSearch(topic);
  };


  return (
    <header>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <form action={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          defaultValue=""
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
