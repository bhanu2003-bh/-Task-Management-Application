import {useEffect,useState,useContext} from 'react'
import UserContext from '../context copy/UserContext'
import '../Css/Background.css'
import axios from 'axios'








function Background() {
  const {obj} = useContext(UserContext);
const [todo,settodo] = useState([]);
const [Inprogress,setInprogress] = useState([]);
const [UnderReview,setUnderReview] = useState([]);
const [Finished,setfinished] = useState([]);


  useEffect(() => {
   axios.post('http://localhost:8000/home/get',{'cookie' : document.cookie})
   .then((res)=>{
    console.log("All Tasks:",res.data);
    const a = [];
    const b = [];
    const c = [];
    const d = [];
    res.data.map((item)=>{
       if(item.status=='To-Do') a.push(item);
       if(item.status=='In Progress') b.push(item);
       if(item.status=='Under Review') c.push(item);
       if(item.status=='Completed') d.push(item);
    })
    settodo(a);
    setInprogress(b);
    setUnderReview(c);
    setfinished(d);
   })
   .catch((err)=>{
     console.log('Server Get Crashed:',err);
   })
   console.log("back:",obj);
  }, []);

const name = "to HomePage"
const signL = "<-Left";
const signR = "Right->";

  return (
    <div className="Background">
      <div className="bg-header-button">
        <button onClick={()=>obj.setleft(true)} >{signL}</button>
        <button onClick={()=>obj.setright(true)}>{signR}</button>
      </div>
      <div className="bg-header-heading">
      <h1>Welcome <span style={{ color: '#0096FF' }}>{name}</span></h1>
      </div>
      <div className="bg-create">
        <button onClick={()=>obj.settask(true)}>Create new+</button>
      </div>
      <div className="bg-tasks">
        <div className="to-do">
          <span>To-do</span>
          {
            todo.map((item, key) => (
              <div className="taski" key={key}>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <button disabled>{item.priority}</button>
                <span>{item.deadline}</span>
              </div>
            ))
          }
        </div>
        <div className="in-progress">
          <span>In Progress</span>
          {
            Inprogress.map((item, key) => (
              <div className="taski" key={key}>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <button disabled>{item.priority}</button>
                <span>{item.deadline}</span>
              </div>
            ))
          }
        </div>
        <div className="under-review">
          <span>Under Review</span>
          {
            UnderReview.map((item, key) => (
              <div className="taski" key={key}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <button disabled>{item.priority}</button>
                <span>{item.deadline}</span>
              </div>
            ))
          }
        </div>
        <div className="finished">
          <span>Finished</span>
          {
            Finished.map((item, key) => (
              <div className="taski" key={key}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <button disabled>{item.priority}</button>
                <span>{item.deadline}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Background;
