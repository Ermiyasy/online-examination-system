import { Outlet, Link } from "react-router-dom"; 
import { useRef } from 'react'; 
import Paper from '@mui/material/Paper'; 
import './Side.css' 
import Avatar from '@mui/material/Avatar';
function Side(){ 
 
    const navRef = useRef(); 
    const showNavbar =()=>{ 
        navRef.current.classList.toggle("responsive_nav"); 
    } 
    return( 
               
        <Paper elevation={5} className="Side"> 
     
            <Avatar 
            src="/broken-image.jpg" 
            sx={{ width: 60, height: 60 ,marginX:6,marginTop:12}}
            />
                <div > <h1 className="header-title">Dep-Head</h1> </div> 
          
        <div className="list"> 
                    <nav ref={navRef}> 
                        <nav className="menu"> 
                <ul> 
                            <li> 
                                <Link className="list-title" to="/">Home</Link> 
                            </li> 
                    
                            <li> 
                                <Link className="list-title"to="/about">Exam Approve</Link>  
                            </li>
                            
                            <li> 
                                <Link className="list-title"to="/PostSchedule">Post Schedule</Link>  
                            </li>

                            <li> 
                                <Link className="list-title" to="/ViewCadidate">View Cadidate</Link> 
                            </li> 
                       
                        
                           <li> 
                                <Link className="list-title">Intregration</Link> 

                                <div className="sub-menu">
                                    <ul>
                                                <li  className="sub-list-title">
                                                  <Link to="/Accept">Accept</Link> 
                                                </li>

                                                <li className="sub-list-title">
                                                    <Link  to="/Request">Request</Link> 
                                                </li>
                                    </ul>
                                </div>
                            </li> 
                     
                  <hr/>
                           
                            <li > 
                                <Link className="list-title" to="/feedback">FeedBack</Link> 
                            </li> 
                           
                            <li> 
                                    <Link className="list-title" to="/">Logout</Link> 
                            </li> 
                                
                        
                </ul> 
                    </nav> 
                    <Outlet /> 
                           
                        </nav>    
                     
            </div> 
          </Paper> 
    ); 
 
} 
export default Side