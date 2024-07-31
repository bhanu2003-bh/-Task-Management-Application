import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import SideNavBar from "./SideNavBar";
import '../Css/Home.css'
import TaskBar from "./TaskBar";
import Background from "./Background";

export default function Home() {
  const navigate = useNavigate();

useEffect(()=>{
 if(localStorage.cookies!=document.cookie) navigate('/login');
},[])


  return (
    <div className="home">
      <SideNavBar></SideNavBar>
      <Background></Background>
      <TaskBar></TaskBar>
    </div>
  )
}

