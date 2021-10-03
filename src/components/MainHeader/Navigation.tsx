import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';
import { useAppSelector } from '../../store/hooks';

const Navigation: React.FC = () => {
  const user = useAppSelector((state) => state.auth);

  return (
    <nav className={classes.nav}>
      <ul>
        {!user.email && (
          <>
            <li>
              <NavLink
                to="/home/register"
                className={classes.link}
                activeClassName={classes.active}
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/home/login"
                className={classes.link}
                activeClassName={classes.active}
              >
                Login
              </NavLink>
            </li>
          </>
        )}
        {user.email && (
          <>
            <li>
              <NavLink
                to="/dashboard"
                className={classes.link}
                activeClassName={classes.active}
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
