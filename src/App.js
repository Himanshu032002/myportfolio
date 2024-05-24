import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';

import Projects from './Components/Projects';
import Resume from './Components/Resume';





function App() {
  return (
    <div className="App">
   <div style={{
    display:"flex"
   }}>
   <Navbar/>
    <Routes>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Portfolio" element={<Portfolio/>}></Route>
      <Route path="/Projects" element={<Projects/>}></Route>
      <Route path="/Resume"  element={<Resume/>}></Route>
    </Routes>
   </div>

    </div>
  );
}

export default App;
