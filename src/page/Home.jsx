
import"./logincard.css"
import { useState } from 'react'
<<<<<<< Updated upstream
import Navbar from '../Navbar';
=======
import About from '../page/about';

import {Route, Routes} from 'react-router-dom'
import Contact from '../page/contact';
import Admin  from '../Admin'
import Feedback from '../page/Feedback';
import LoginCard from "./LoginCard";

>>>>>>> Stashed changes

function Home(){
    const [name,setName]= useState();
    function handle (event){
     setName(event.target.value);
    };
 
  return(
    <>
<<<<<<< Updated upstream
        <Navbar />
   <div className="card">
            <div>
            <img className='card-image' src={loginimag} alt="Game card " />
            </div>
                        <h2 className='card-title'>LOGIN PAGE</h2>
                <div className="login-input">
                        <label htmlFor="">User Name : 
                            <input value={name} onChange={handle} placeholder='Enter Your Name'/>
                        </label>
                        <br />
                        <label  htmlFor="">Password :
                            <input type='password' placeholder='Enter Your Password'/>
                        </label>
                        <br />
                        
        <Link to="/Dashboard"><button value={loginimag} >Login</button></Link>
        
                        <button type="reset">RESET</button>
                        <br />
                        <br />
                        <p className='card-text'>Thank you for working with us {name}</p>
                </div>
        </div>
=======
     <div>
      <Routes> 
         <Route path='/about' element={<About/>}></Route>
         <Route path='/Feedback' element={<Feedback/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
         <Route path='/Admin' element={<Admin />}></Route>
         <Route path='/LoginCard' element={<LoginCard />}></Route>
      </Routes>
      
     </div>
  
>>>>>>> Stashed changes
        </>
  );

}
export default Home