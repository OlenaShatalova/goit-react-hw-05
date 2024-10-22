import css from './List.module.css';

const List = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
};

export default List;
