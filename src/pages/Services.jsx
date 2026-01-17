import './Services.css';

const Services = () => {
  return (
    <div className="services-wrapper">
      
      {/* 1. Clean Header with Pattern */}
      <div className="services-intro">
        <div className="container">
          <span className="subtitle">Our Capabilities</span>
          <h1>Engineering Excellence</h1>
          <p className="intro-text">
            We deliver high-fidelity modeling, strategic consulting, and workforce empowerment 
            to the world's leading energy sectors.
          </p>
        </div>
      </div>

      {/* 2. Main Services Cards */}
      <div className="container">
        <div className="services-grid">
          
          <div className="service-card">
            <div className="card-header">
              <span className="card-number">01</span>
              <h3>Technical Consultancy</h3>
            </div>
            <p>
              Strategic business consulting designed to elevate client processes to global best practices. 
              We identify operational gaps and engineer workflows for maximum efficiency.
            </p>
            <ul className="service-list">
              <li>Business Process Optimization</li>
              <li>Downstream Operations</li>
              <li>Profitability Analysis</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="card-header">
              <span className="card-number">02</span>
              <h3>Implementation</h3>
            </div>
            <p>
              End-to-end technology implementation. We build robust, client-specific models 
              that drive decision-making in real-time.
            </p>
            <ul className="service-list">
              <li>Planning & Scheduling Models</li>
              <li>Blending Optimization</li>
              <li>Energy Management Systems</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="card-header">
              <span className="card-number">03</span>
              <h3>Training Services</h3>
            </div>
            <p>
              Empower your workforce with customized training programs. We bridge the gap 
              between complex software capabilities and user proficiency.
            </p>
            <ul className="service-list">
              <li>Software Workshops</li>
              <li>Process Simulation Training</li>
              <li>Best Practice Seminars</li>
            </ul>
          </div>

        </div>
      </div>

      {/* 3. UPDATED: Industries Section (Red & White Design) */}
      <div className="industries-wrapper">
        <div className="container">
          <div className="section-header">
            <h2>Industries We Serve</h2>
            <div className="red-divider"></div>
          </div>
          
          <div className="industries-grid">
            
            {/* Refineries */}
            <div className="industry-box">
              <div className="industry-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M6 20v-8"/><path d="M12 20V4"/><path d="M18 20v-4"/><path d="M6 12 2 12"/><path d="M18 16 22 16"/><path d="M12 4 8 8"/><path d="M12 4 16 8"/></svg>
              </div>
              <h3>Refineries</h3>
              <p>Yield optimization & process logic.</p>
            </div>

            {/* Petrochemicals */}
            <div className="industry-box">
              <div className="industry-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2h4"/><path d="M12 14v-4"/><path d="M12 2v6"/><path d="M5.536 8.464 2 12l3.536 3.536"/><path d="M8.464 5.536 12 2l3.536 3.536"/><path d="M18.464 8.464 22 12l-3.536 3.536"/><path d="M15.536 18.464 12 22l-3.536-3.536"/></svg>
              </div>
              <h3>Petrochemicals</h3>
              <p>Supply chain & production modeling.</p>
            </div>

            {/* Logistics */}
            <div className="industry-box">
              <div className="industry-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <h3>Logistics</h3>
              <p>Scheduling & distribution networks.</p>
            </div>

            {/* Downstream */}
            <div className="industry-box">
              <div className="industry-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3>Downstream</h3>
              <p>Market economics & operations.</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;