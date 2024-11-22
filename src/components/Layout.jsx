import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout-children">
          {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;