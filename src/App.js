import './App.css';

<<<<<<< Updated upstream
import About from './page/about';
import Footer from './Footer';
import {Route, Routes} from 'react-router-dom'
import Contact from './page/contact';
import Home from './page/Home';
import Feedback from './page/Feedback';
=======
>>>>>>> Stashed changes
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
<<<<<<< Updated upstream
=======
import Pagehader from './pageheader';
>>>>>>> Stashed changes



function App() {
 
  return (
   <>
<<<<<<< Updated upstream
    
     
     <div>
      <Routes> 
        <Route path='/' element={<Home/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/Feedback' element={<Feedback/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
     
      </Routes>
      <Footer/>
     </div>
=======
     <Pagehader/>
>>>>>>> Stashed changes
   </>
  );
}

export default App;
