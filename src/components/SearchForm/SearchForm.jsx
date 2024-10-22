import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.search.value.trim();

    query ? onSubmit(query) : alert('enter search');

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
    </>
  );
};

export default SearchForm;
