import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Experience from './pages/Experience';
import logo from './assets/logo.png'; // Import the logo
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        
        {/* --- NAVBAR --- */}
        <nav>
          <div className="nav-content">
            
            {/* 1. LOGO + TEXT AREA */}
            <div className="logo-area">
              <Link to="/" className="logo-link">
                <img src={logo} alt="HasamTech Logo" className="logo-img" />
                <span className="logo-text">Hasam Technical Consultancy</span>
              </Link>
            </div>

            {/* 2. NAVIGATION LINKS */}
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/experience">Experience</Link>
            </div>
          </div>
        </nav>

        {/* --- PAGE CONTENT --- */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>

        {/* --- FOOTER --- */}
        <footer className="footer">
          <div className="footer-content">
            <div className="copyright">
              © 2026 Hasam Technical Consultancy. All Rights Reserved.
            </div>
            <div className="footer-contact">
              <a href="tel:+919586696222" className="footer-link">
                📞 +91 9586696222
              </a>
              <span className="separator">|</span>
              <a href="mailto:anwar@hasamtech.com" className="footer-link">
                ✉️ anwar@hasamtech.com
              </a>
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;