import React from 'react';

import './App.css';
import Header from './home componte/Header';
import Footer from './home componte/footer';
import Body from './home componte/Body';
import Side from './home componte/Side';



function Admin() {

  return (
   <>
      <Header/>
      <Side/>
      <Body/>
      <Footer/>
   </>
  );
}

export default Admin