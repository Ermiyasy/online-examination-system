import './App.css';

import About from './page/about';
import {Route, Routes} from 'react-router-dom'
import Contact from './page/contact';
import Home from './page/Home';
import Feedback from './page/Feedback';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Dashboard  from './dashboard/Dashboard'
;


function App() {
 
 
  return (
   <>
 
     
     <div>
      <Routes> 
         <Route path='/' element={<Home/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/Feedback' element={<Feedback/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
         <Route path='/Dashboard' element={<Dashboard />}></Route>
      </Routes>
  
     </div>
   </>
  );
}

export default App;
