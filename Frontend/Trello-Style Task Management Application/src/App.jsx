import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home,Login,Signup,Notfound} from '../Index'


function App() {
  return (
    <Router>
        <Routes>
           <Route path='/' element={<Home></Home>} />
           <Route path='/home' element={<Home></Home>} />
           <Route path='/login' element={<Login></Login>}></Route>
           <Route path='/signup' element={<Signup></Signup>}></Route>
           <Route path='*' element={<Notfound></Notfound>}></Route>
        </Routes>
    </Router>
  )
}

export default App
