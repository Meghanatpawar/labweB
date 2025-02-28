import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Users from './assets/Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<Users/>}></Route>
         <Route path='/create' element={<CreateUser/>}></Route>
         <Route path='/update' element={<UpdateUser/>}></Route>
        </Routes>
     </BrowserRouter>
    
   </div>
  )
}

export default App
