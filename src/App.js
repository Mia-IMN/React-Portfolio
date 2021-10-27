import './App.scss';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import SideDrawer from "./Components/SideDrawer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contact from './Components/Pages/Contact';
import Portfolio from './Components/Pages/Portfolio';
import Skill from './Components/Pages/Skill';
import AboutMe from './Components/Pages/About_Me';

function App() {
  const spanColor = {
    // For pages headtext underline
    backgroundColor: "skyblue",
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <SideDrawer />
      <div className="landing-page">
        <Homepage color={spanColor} />
        <AboutMe id="about" color={spanColor} />
        <Skill  color={spanColor} />
        <Portfolio color={spanColor} />
        <Contact color={spanColor} />

        </div>
    </Router>
    </div>
  );
}

export default App;
