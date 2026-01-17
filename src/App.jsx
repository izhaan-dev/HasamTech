import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import logo from './assets/logo.png'; // Make sure your Img1 is named logo.png in assets folder

function App() {
  return (
    <Router basename="/HasamTech">
      <div className="app">
        {/* Navigation Bar */}
        <nav>
          <div className="container nav-content">
            <Link to="/" className="logo-area">
              <img src={logo} alt="HasamTech Logo" className="logo-img" />
              <span>Hasam Technical Consultancy</span>
            </Link>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Simple Footer */}
        <footer style={{ textAlign: 'center', padding: '20px', marginTop: '20px', color: '#666' }}>
          &copy; {new Date().getFullYear()} Hasam Technical Consultancy. All Rights Reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;