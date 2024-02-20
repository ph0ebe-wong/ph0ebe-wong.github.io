import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './Components/navbar';
import Home from './Components/home'
import ProjectPages from './Components/project_pages'

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/project" element={<ProjectPages />}/>
      </Routes>
    </Router>
  );
}

export default App;
