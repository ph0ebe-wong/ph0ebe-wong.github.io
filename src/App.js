import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation, 
  useNavigate
} from "react-router-dom";
import './App.css';
import Home from './Components/home';
import Navbar from "./Components/navbar";
import { useEffect } from 'react';
import MatchablePage from "./Components/matchable_page";
import SimulationPage from "./Components/simulation_page";

const ScrollToAnchor = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        const navbar = document.querySelector('.nav'); // Query the navbar directly
        const navbarHeight = navbar ? navbar.offsetHeight : 0; // Get the navbar's height
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 0);
    }
  }, [hash]);
  
  return null;
};


function App() {
  
  return (
    <Router>
      <ScrollToAnchor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/project-page/matchable" element={<MatchablePage />}/>
        <Route path="/project-page/solarwind-simulation" element={<SimulationPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
