import React from 'react';

import classes from './Center.module.css';

const Center: React.FC = ({ children }) => {
  return <div className={classes.center}>{children}</div>;
};

export default Center;
