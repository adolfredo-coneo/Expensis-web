import React from 'react';

interface MenuItemProps {
  label: string;
  icon: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, icon }) => {
  return (
    <li>
      <a href="#">
        <i className={icon}></i>
        <span className="links_name">{label}</span>
      </a>
      {/*<span className="tooltip">Dashboard</span>*/}
    </li>
  );
};

export default MenuItem;
