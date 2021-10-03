import React from "react";
import Features from "./Features";
import Hero from "./Hero";

import classes from "./Main.module.css";

const Main: React.FC = () => {
  return (
    <main className={classes.main}>
      <Hero />
      <Features />
    </main>
  );
};

export default Main;
