import NavBar from './assets/Navbar';
import Tool from './assets/completeTool';
import About from './assets/About';
import Footer from './assets/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
    <div className="my-5">
    <Router basename="/textutils"> {/* Add basename here */}
      <NavBar title="Text Utils" />
      <Routes>
      <Route path="/" element={<Tool />} />
      <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
    </div>
    </>
  )
}

export default App
