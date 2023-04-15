import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default SharedLayout;
