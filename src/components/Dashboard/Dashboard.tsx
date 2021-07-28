import React from 'react';

import MenuBar from '../../layout/MenuBar/MenuBar';
import classes from './Dashboard.module.css';
import { useAppSelector } from '../../store/hooks';

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  const user = useAppSelector((state) => state.auth);
  return (
    <>
      {user.email && <MenuBar />}
      <div className={classes.main__content}>Dashboard</div>
    </>
  );
};

export default Dashboard;
