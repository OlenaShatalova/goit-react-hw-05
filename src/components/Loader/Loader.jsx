import { CircleLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <CircleLoader color="#C32828" />;
    </div>
  );
};

export default Loader;
