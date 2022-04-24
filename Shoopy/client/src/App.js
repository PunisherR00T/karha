import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import NavUser from './Components/NavUser';

function App() {
  return (
    <div >
      <NavUser/>
   <Routes>
     <Route path='/' element={<Home/>}/>
   </Routes>
    </div>
  );
}

export default App;
