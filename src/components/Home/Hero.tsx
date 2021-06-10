import { Link } from "react-router-dom";
import classes from "./Hero.module.css";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section className={classes.hero}>
      <div className={classes.logo}>
        <img alt="Money Logo" src="../../../images/dollar-logo.png" />
      </div>
      <div className={classes.info}>
        <h1>Improve your finances</h1>
        <p>
          If you need help with your finances but aren't sure where to start,
          seek financial wisdom from books written by experts.
        </p>
        <p>
          A financial plan is essential for taking control of your finances and
          accomplishing specific goals. In short, a financial plan is a timeline
          for the big milestones in your life.
        </p>
        <Link to="/register">Crear una cuenta</Link>
      </div>
    </section>
  );
};

export default Hero;
