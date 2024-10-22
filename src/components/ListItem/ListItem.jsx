import css from './ListItem.module.css';

const ListItem = ({ children }) => {
  return <li className={css.item}>{children}</li>;
};

export default ListItem;
