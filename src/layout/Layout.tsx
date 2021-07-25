import React from 'react';
import MainHeader from '../components/MainHeader/MainHeader';
import Footer from '../components/Home/Footer';
import Notification from '../components/UI/Notification/Notification';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main className="container">
        <Notification />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
