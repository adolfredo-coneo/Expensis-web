import React from 'react';

import classes from './MenuBar.module.css';
import MenuItem from './MenuItem';

interface MenuBarProps {}

const menus = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'bx bx-grid-alt',
    route: 'dashboard',
  },
  {
    id: 'finances',
    label: 'Finances',
    icon: 'bx bx-money',
    route: 'finances',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: 'bx bx-pie-chart-alt-2',
    route: 'analytics',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'bx bx-cog',
    route: 'settings',
  },
];

const MenuBar: React.FC<MenuBarProps> = (props) => {
  return (
    <div>
      <div className={classes.sidebar}>
        <div className={classes.logo_content}>
          <div className={classes.logo}>
            <i className="bx bxl-c-plus-plus"></i>
            <div className={classes.logo_name}>eXpensis</div>
          </div>
          <i className={`bx bx-menu btn ${classes.btn}`} id="btn"></i>
        </div>
        <ul className="nav_list">
          <li>
            <i className="bx bx-search"></i>
            <input type="text" placeholder="Search..." />
            {/*<span className="tooltip">Dashboard</span>*/}
          </li>
          {menus.map((menu) => {
            return (
              <MenuItem key={menu.id} label={menu.label} icon={menu.icon} />
            );
          })}
        </ul>
        <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              <div className="name_job">
                <div className="name">Adol Coneo</div>
                <div className="job">Software Developer</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="logout"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
