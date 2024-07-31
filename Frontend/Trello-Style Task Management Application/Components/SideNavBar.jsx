import { useContext} from "react";
import "../Css/SideNavBar.css";
import UserContext from "../context copy/UserContext";
import { useNavigate } from "react-router-dom";

function SideNavBar() {
  const {obj} = useContext(UserContext);
const navigate = useNavigate();



function logout(){
   document.cookie = null;
   navigate('/login');
}

function closeMe(){
  obj.setleft(false);
}



  return (
    <div className="SideNav" style={ obj.left? {width:'200px'} : {width:'0px'}}>
      <div className="mid">
   
        <a href="javascript:void(0)" className="closebtn" onClick={closeMe}>
          Close
        </a>
        <br></br>
         <img className="Side-img" src="../ProfilePhotoAssingment.png"></img>
          <h4>Bhanu Pratap Sharma</h4>
          <button onClick={logout}>Logout</button>

        <a href="#">Home</a>
        <a href="#">Boards</a>
        <a href="#">Settings</a>
        <a href="#">Teams</a>
        <a href="#">Analytics</a>
        <button className="task" onClick={()=>obj.settask(true)}>Create new task +</button>
    
      </div>
      <div className="end">
        <button>Download the app</button>
      </div>
    </div>
  );
}

export default SideNavBar;
