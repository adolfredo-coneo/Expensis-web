import React from "react";
import classes from "./Features.module.css";

const Features: React.FC = () => {
  return (
    <section className={classes.features}>
      <h1>Keep track of your finances whenever you go</h1>
      <div className={classes.container}>
        <div>
          <h3>Feature 1</h3>
          <p>This is the number one</p>
        </div>
        <div></div>
        <div>
          <h3>Feature 2</h3>
          <p>This is the number two</p>
        </div>
        <div>
          <h3>Feature 3</h3>
          <p>This is the number three</p>
        </div>
        <div></div>
        <div>
          <h3>Feature 4</h3>
          <p>This is the number four</p>
        </div>
        <div className={classes.item5}>
          <h3>Feature 5</h3>
          <p>This is the number five</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
