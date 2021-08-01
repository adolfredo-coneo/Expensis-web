import React, { useEffect, useRef } from 'react';

import MenuBar from '../../layout/MenuBar/MenuBar';
import { useAppSelector } from '../../store/hooks';
import classes from './DashboardLayout.module.css';

const DashboardLayout: React.FC = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const sideBarState = useAppSelector((state) => state.layout.isSidebarOpen);

  useEffect(() => {
    if (contentRef.current) {
      if (sideBarState)
        contentRef.current.classList.add(
          classes.main__content__sidebar__active
        );
      else
        contentRef.current.classList.remove(
          classes.main__content__sidebar__active
        );
    }
  }, [sideBarState]);

  return (
    <div>
      <MenuBar />
      <div className={classes.main__content} ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
