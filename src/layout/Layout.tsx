import React from 'react';
import MainHeader from '../components/MainHeader/MainHeader';
import MenuBar from '../layout/MenuBar/MenuBar';
import Footer from '../components/Home/Footer';
import Notification from '../components/UI/Notification/Notification';
import classes from './Layout.module.css';
import { useAppSelector } from '../store/hooks';

const Layout: React.FC = ({ children }) => {
  const user = useAppSelector((state) => state.auth);
  return (
    <>
      <MainHeader />
      <main className="container">
        {user.email && <MenuBar />}
        <Notification />
        <div className={classes.content}>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
