import React from 'react';

import MenuBar from '../../layout/MenuBar/MenuBar';
import classes from './DashboardLayout.module.css';

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <div>
      <MenuBar />
      <div className={classes.main__content}>{children}</div>
    </div>
  );
};

export default DashboardLayout;
