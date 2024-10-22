import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

import Container from '../Container/Container';

import css from './Navigation.module.css';

const Navigation = () => {
  const buildCssClasses = ({ isActive }) =>
    clsx(css.link, isActive && css.active);

  return (
    <header className={css.header}>
      <Container>
        <nav>
          <ul className={css.nav}>
            <li>
              <NavLink to="/" className={buildCssClasses}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={buildCssClasses}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navigation;
