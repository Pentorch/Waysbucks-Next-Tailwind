import { Fragment } from 'react';

import Head from 'next/head';
import Navbar from 'src/components/molecules/Navbar';

const Layout = ({ children, className, footer, header, showNavbarShadow, ...props }) => {
  return (
    <Fragment>
      <Head>
        <title>Waysbucks</title>
        <link rel="shortcut icon" href="/favicons.ico" />
      </Head>
      {header ? <Navbar /> : <Fragment />}
      <div className={`relative min-h-[100vh] bg-white ${className}`} {...props}>
        {children}
      </div>

      {footer ? <footer /> : <Fragment />}
    </Fragment>
  );
};

Layout.defaultProps = {
  header: true,
  footer: true,
  className: '',
};

export default Layout;
