import React from 'react';

import classes from './MenuBar.module.css';
import MenuItem from './MenuItem';
import profile from '../../resources/images/profile.png';
import { Link, useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { signOutUser } from '../../store/actions/auth';

interface MenuBarProps {}

const menus = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'bx bx-grid-alt',
    route: '/dashboard',
  },
  {
    id: 'finances',
    label: 'Finances',
    icon: 'bx bx-money',
    route: '/dashboard/finances',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: 'bx bx-pie-chart-alt-2',
    route: '/dashboard/analytics',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'bx bx-cog',
    route: '/dashboard/settings',
  },
];

const MenuBar: React.FC<MenuBarProps> = (props) => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const handleLogout = async (Event: React.MouseEvent<HTMLAnchorElement>) => {
    Event.preventDefault();
    try {
      await dispatch(signOutUser());
      history.push('/home');
    } catch (e) {
      console.log(e);
    }
  };

  return (
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
          <i className={`bx bx-search ${classes.bx__search}`}></i>
          <input type="text" placeholder="Search..." />
          {/*<span className="tooltip">Dashboard</span>*/}
        </li>
        {menus.map(({ id, label, icon, route }) => (
          <MenuItem key={id} label={label} icon={icon} route={route} />
        ))}
      </ul>
      <div className={classes.profile__content}>
        <div className={classes.profile}>
          <div className={classes.profile__details}>
            <img src={profile} alt="profile" />
            <div className={classes.name__job}>
              <div className={classes.name}>Adol Coneo</div>
              <div className={classes.job}>Software Developer</div>
            </div>
          </div>
          <Link
            to="/"
            className={classes.link}
            onClick={(Event) => handleLogout(Event)}
          >
            <i className={`bx bx-log-out ${classes.logout}`} id="logout"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
