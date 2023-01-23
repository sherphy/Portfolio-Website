import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {
  return (
    <div className="App">
      {/* <Routes> */}
      <Header/>
      <About/>
      <Contact/>
      {/* <Route path="/contact" element={<Contact/>}/> */}
          {/* </Routes> */}
    </div>
  );
}

export default App;
