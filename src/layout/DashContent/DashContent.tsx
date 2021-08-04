import React from 'react';
import classes from './DashContent.module.css';

interface DashContentProps {}

const DashContent: React.FC<DashContentProps> = ({ children }) => {
  return <div className={classes.content}>{children}</div>;
};

export default DashContent;
