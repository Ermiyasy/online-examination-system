
import "./logincard.css"
import"./logincard.css"
import { useState } from 'react'
import loginimag from '../asset/bg-01.jpg'
import {Link} from 'react-router-dom'

function LoginCard(){
  

    const [name,setName]= useState();
  function handle (event){
   setName(event.target.value);
  };
  return(
    <>
      
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
                        
                       <Link to="/Admin"><button value={loginimag} >Login</button></Link>
        
                        <button type="reset">RESET</button>
                        <br />
                        <br />
                        <p className='card-text'>Thank you for working with us {name}</p>
                </div>
        </div>
        </>
  );

}
export default LoginCard