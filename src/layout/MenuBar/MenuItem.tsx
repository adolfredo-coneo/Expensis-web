import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MenuBar.module.css';

interface MenuItemProps {
  label: string;
  icon: string;
  route: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, icon, route }) => {
  return (
    <li className={classes.menuItem}>
      <Link to={route}>
        <i className={icon}></i>
        <span className={classes.links__name}>{label}</span>
      </Link>
      <span className={classes.tooltip}>{label}</span>
    </li>
  );
};

export default MenuItem;
