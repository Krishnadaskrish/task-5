import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';
import{Route,Routes} from 'react-router-dom'



function App() {


  return (
    <>
   
      <Routes>
    <Route path='/'element={<Registration/>}/>
    <Route path='/log' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    </Routes>
   
    </>
    

   
   );
}

export default App
