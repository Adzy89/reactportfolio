import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import './App.css';



const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing/>}>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Resume" element={<Resume/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
