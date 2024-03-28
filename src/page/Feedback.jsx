import loginimag from '../asset/bg-01.jpg'
import "./logincard.css"
import"./logincard.css"
import Navbar from '../Navbar';

function Feedback(){
  
  return(
    <>
     <Navbar />
  
   <div className="card">
            <div>
            <img className='card-image' src={loginimag} alt="Game card " />
            </div>
                        <h2 className='card-title'>Feedback US PAGE</h2>
                <div className="login-input">
                      <h2>
                        This will Conten the Feedback about our work <br /><br />
                        This will Conten the Feedback about our work <br /><br />
                        This will Conten the Feedback about our work <br /><br />
                        This will Conten the Feedback about our work <br /><br />
                        
                      </h2>
                </div>
        </div>
    </>
  );

}
export default Feedback