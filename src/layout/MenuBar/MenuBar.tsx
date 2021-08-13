import React, { useEffect, useRef } from 'react';

import classes from './MenuBar.module.css';
import MenuItem from './MenuItem';
import profile from '../../resources/images/profile.png';
import { Link, useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { signOutUser } from '../../store/actions/auth';
import { layoutActions } from '../../store/slices/layout';

interface MenuBarProps {}

const MenuBar: React.FC<MenuBarProps> = (props) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const menus = useAppSelector((state) => state.layout.menus);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const userState = useAppSelector((state) => state.auth);
  const sideBarState = useAppSelector((state) => state.layout.isSidebarOpen);

  const handleLogout = async (Event: React.MouseEvent<HTMLAnchorElement>) => {
    Event.preventDefault();
    try {
      await dispatch(signOutUser());
      history.push('/home');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (sidebarRef.current) {
      if (sideBarState)
        sidebarRef.current.classList.add(classes.sidebar__active);
      else sidebarRef.current.classList.remove(classes.sidebar__active);
    }
  }, [sideBarState]);

  const onClickMenuHandler = () => {
    dispatch(layoutActions.toggleSidebar());
  };

  return (
    <div className={classes.sidebar} ref={sidebarRef}>
      <div className={classes.logo_content}>
        <div className={classes.logo}>
          <i className="bx bxl-c-plus-plus"></i>
          <div className={classes.logo_name}>eXpensis</div>
        </div>
        <i
          className={`bx bx-menu btn ${classes.btn}`}
          onClick={onClickMenuHandler}
          id="btn"
        ></i>
      </div>
      <ul className="nav_list">
        <li>
          <i
            className={`bx bx-search ${classes.bx__search}`}
            onClick={onClickMenuHandler}
          ></i>
          <input type="text" placeholder="Search..." />
        </li>
        {menus &&
          menus.map(({ code, label, icon, route }) => (
            <MenuItem key={code} label={label} icon={icon} route={route} />
          ))}
      </ul>
      <div className={classes.profile__content}>
        <div className={classes.profile}>
          <div className={classes.profile__details}>
            <img src={profile} alt="profile" />
            <div className={classes.name__job}>
              <div className={classes.name}>{userState.name}</div>
              <div className={classes.job}>{userState.email}</div>
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
