import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItemProps {
  label: string;
  icon: string;
  route: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, icon, route }) => {
  return (
    <li>
      <Link to={route}>
        <i className={icon}></i>
        <span className="links_name">{label}</span>
      </Link>
      {/*<span className="tooltip">Dashboard</span>*/}
    </li>
  );
};

export default MenuItem;
