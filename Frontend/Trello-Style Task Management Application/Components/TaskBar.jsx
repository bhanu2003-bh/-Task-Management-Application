import '../Css/TaskBar.css'
import { useContext } from "react";
import UserContext from '../context copy/UserContext';
import axios from 'axios'

function TaskBar() {
    
    const {obj} = useContext(UserContext);
 

   function SubmitTask(e){
   e.preventDefault();
   const form = e.target;
   console.log(form);
    const formData = new FormData(form);
  
    for (let [name, value] of formData) {
        console.log(`${name}: ${value}`);
      }
  
      const formObject = Object.fromEntries(formData);
      console.log(formObject);
  
  
      const newobj = {'obj' : formObject,'cookie' : document.cookie};
      // axios query
      axios.post('http://localhost:8000/home', newobj)
      .then((res) => {
          console.log(res.data);
          window.location.reload();
      })
      .catch((error) => {
          console.log('error in Taskbar:', error);
      });

      obj.setright(false);
   }

    
      return (
        <div className="TaskBar" style={(obj.right || obj.newtask) ? {width:'37%'} : {width:'0%'}}>
          <div className="TaskBar-mid">
       
            <a href="javascript:void(0)" className="closebtn" onClick={()=>obj.setright(false)}>
              Close
            </a>
      <form onSubmit={SubmitTask}>
           <input className='TaskBar-title' placeholder='Title' name='title' required></input>
          
        <div className="TaskBar-Book">
          <div className='TaskBar-elements'>
           <label>Status</label>
           <select  name='status' required>
               <option value="Not Selected">Not Selected</option>
               <option value="To-Do">To-Do</option>
               <option value="In Progress">In Progress</option>
               <option value="Under Review">Under Review</option>
               <option value="Completed">Completed</option>
           </select>
          </div>

          <div className='TaskBar-elements'>
           <label>Priorty</label>
           <select  name='priority'>
               <option value="Not Selected">Not Selected</option>
               <option value="Urgent">Urgent</option>
               <option value="Medium">Medium</option>
               <option value="Low">Low</option>
           </select>
          </div> 

          <div className='TaskBar-elements'>
           <label>Deadline</label>
           <input placeholder='Not Selected' type='date' name='deadline'></input>
          </div>

          <div className='TaskBar-elements'>
           <label>Description</label>
           <input placeholder='Not Selected' name='description'></input>
          </div>    
        </div>          
            <button className="task" type='submit'>Submit Task</button>
      </form> 
          </div>
        </div>
      );
}

export default TaskBar
