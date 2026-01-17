import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero with Video Background & Fallback */}
      <div className="hero-section">
        <div className="video-overlay"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video"
          poster="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1600"
        >
          <source src="https://player.vimeo.com/external/371836823.sd.mp4?s=d12469493f0b240cc96839a8508c90b63390c53d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-content">
          <h1>Hasam Technical Consultancy</h1>
          <p className="hero-text">
            Driving operational excellence in Refineries & Petrochemicals through expert consulting and advanced modeling.
          </p>
          <div className="hero-buttons">
            <Link to="/experience" className="cta-button">View Our Projects</Link>
            <Link to="/contact" className="cta-button-outline">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Who We Are</span>
            <h2 className="section-heading">Global Expertise, Local Focus</h2>
          </div>
          <div className="about-card">
            <p className="about-text">
              Hasam Technical Consultancy (HasamTech) is a premier firm based in India, providing 
              expert-level technical consulting, modeling project implementation, and training services. 
              We partner with <strong>Refineries and Petrochemical</strong> sector clients globally 
              to ensure their business processes align with world-class best practices.
            </p>
          </div>
        </div>
      </div>

      {/* UPDATED: Colorful "What We Do" Section */}
      <div className="home-services-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">What We Do</span>
            <h2 className="section-heading">Comprehensive Solutions</h2>
          </div>
          
          <div className="preview-grid">
            {/* Card 1: Consulting */}
            <div className="preview-card consulting-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3>Consulting</h3>
              <p>Business process optimization and expert advisory for downstream operations.</p>
            </div>

            {/* Card 2: Implementation */}
            <div className="preview-card implementation-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/></svg>
              </div>
              <h3>Implementation</h3>
              <p>Building robust models for Planning, Scheduling, and Energy Management.</p>
            </div>

            {/* Card 3: Training */}
            <div className="preview-card training-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              </div>
              <h3>Training</h3>
              <p>Customized workshops and training programs for industry-standard software.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services" className="text-link">Explore All Services →</Link>
          </div>
        </div>
      </div>

      {/* Features Strip */}
      <div className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <h3>25+ Years</h3>
              <p>Oil and Gas Experience</p>
            </div>
            <div className="feature-divider"></div>
            <div className="feature-item">
              <h3>Global</h3>
              <p>Client Footprint</p>
            </div>
            <div className="feature-divider"></div>
            <div className="feature-item">
              <h3>End-to-End</h3>
              <p>Consulting to Implementation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;