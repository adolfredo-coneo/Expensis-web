import React from 'react';
import MainHeader from '../components/MainHeader/MainHeader';
import Footer from '../components/Home/Footer';
import Notification from '../components/UI/Notification/Notification';
import classes from './Layout.module.css';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main className="container">
        <Notification />
        <div className={classes.content}>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
