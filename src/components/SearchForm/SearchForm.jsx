import { toast, ToastContainer } from 'react-toastify';

import css from './SearchForm.module.css';
import 'react-toastify/dist/ReactToastify.css';

const SearchForm = ({ onSubmit }) => {
  const showToast = () => {
    toast('enter search!');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.search.value.trim();

    query ? onSubmit(query) : showToast();

    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="search"
          autoFocus
          autoComplete="off"
          placeholder="Enter for search"
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
      <ToastContainer style={{ textAlign: 'center', marginTop: '100px' }} />
    </>
  );
};

export default SearchForm;
