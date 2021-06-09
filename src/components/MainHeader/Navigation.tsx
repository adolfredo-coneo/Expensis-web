import classes from "./Navigation.module.css";

interface Props {}

const Navigation = (props: Props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="/">Register</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
