import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

interface Props {}

const Navigation = (props: Props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/register" className={classes.link} activeClassName={classes.active}>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={classes.link} activeClassName={classes.active}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
