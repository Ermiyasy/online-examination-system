import './App.css';
import Navbar from './Navbar';
import Footer from './footer';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from './page/Home';


function Pagehader() {
 
  return (
   <>
     <Navbar/>
     <Home/>
     <Footer/>
   </>
  );
}

export default Pagehader
