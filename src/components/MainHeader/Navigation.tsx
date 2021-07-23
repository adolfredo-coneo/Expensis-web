import { NavLink, useHistory } from 'react-router-dom';
import classes from './Navigation.module.css';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { signOutUser } from '../../store/actions/auth';

interface Props {}

const Navigation = (props: Props) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const user = useAppSelector((state) => state.auth);

  const handleLogout = async (Event: React.MouseEvent<HTMLAnchorElement>) => {
    Event.preventDefault();
    try {
      await dispatch(signOutUser());

      //console.log({ response, data });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <nav className={classes.nav}>
      <ul>
        {!user.email && (
          <>
            <li>
              <NavLink
                to="/register"
                className={classes.link}
                activeClassName={classes.active}
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
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
                to="/"
                className={classes.link}
                activeClassName={classes.active}
                onClick={(Event) => handleLogout(Event)}
              >
                Logout
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
