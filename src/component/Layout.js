import React from 'react';

import Footer from "../component/Footer"
import Header from "../component/Header"
import '../styles/index.scss'
import LayoutStyles from './Layout.module.scss';

const Layout = (props) => {
  return (
    <div className={LayoutStyles.container}>
      <div className={LayoutStyles.content}>
        <Header/>
          {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
