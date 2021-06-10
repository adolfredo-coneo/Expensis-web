import Features from "./Features";
import Hero from "./Hero";

import classes from "./Main.module.css";

interface Props {}

const Main = (props: Props) => {
  return (
    <main className={classes.main}>
      <Hero />
      <Features />
    </main>
  );
};

export default Main;
