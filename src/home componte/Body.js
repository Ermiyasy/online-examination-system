import { Routes ,Route} from "react-router-dom";
import About from "./Body/About";
import FeedBack from "./Body/FeedBack";
import Intregration from "./Body/intregration";
import Accept from './Body/Dep-componet/Accept'
import PostSchedule from './Body/Dep-componet/PostSchedule'
import ViewCadidate from './Body/Dep-componet/ViewCadidate'
import Request from './Body/Dep-componet/Request'
import Home from "./Body/Home";
import '../index.css'
function Body(){
     
    return(
        <div className="Body">
         
        <Routes>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="feedback" element={<FeedBack />} />
                        <Route path="Intregration" element={<Intregration />} />
                        <Route path="ViewCadidate" element={<ViewCadidate />} />
                        <Route path="PostSchedule" element={<PostSchedule />} />
                        <Route path="Accept" element={<Accept />} />
                        <Route path="Request" element={<Request />} />
        </Routes>
        </div>     
    );

}
export default Body