import loginimag from '../asset/bg-01.jpg'
import "./logincard.css"
import"./logincard.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function About(){
  

 
  return(
    <>
   
    <div className="card">
            <div>
            <img className='card-image' src={loginimag} alt="Game card " />
            </div>
                        <h2 className='card-title'>About US PAGE</h2>
                <div className="login-input">
                      <h2>
                        This will GiVE  the information about our work <br />
                      </h2>
                </div>
        </div>
        </>
  );

}
export default About