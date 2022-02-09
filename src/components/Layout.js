import React from 'react';
import NavBar from'./NavBar';
import Footer from'./Footer';
import "normalize.css"
import '../assets/css/main.css'

//single page layout wrapper-this is a good tool to use to keep things simple
//must remember to place children/props inside the layout
const Layout = ({ children }) => {
  return(
<React.Fragment>
<NavBar />
{children}
<Footer />
  </React.Fragment>
  )
};

export default Layout;
