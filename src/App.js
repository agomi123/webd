import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Screen1 from './Components/Screen1';
import Screen2 from './Components/Screen2';
import Screen3 from './Components/Screen3';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Screen1/>}/>
      <Route path='/screen2' element={<Screen2/>}/>
      <Route path='/screen3' element={<Screen3/>}/>
     </Routes>
    </div>
  );
}

export default App;
