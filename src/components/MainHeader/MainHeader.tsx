import { Link } from "react-router-dom";
import classes from "./MainHeader.module.css";
import Navigation from "./Navigation";

const MainHeader = () => {
  return (
    <div className={classes["main-header"]}>
      <h1>
        <Link to="/home">eXpensis</Link>
      </h1>
      <Navigation />
    </div>
  );
};

export default MainHeader;
