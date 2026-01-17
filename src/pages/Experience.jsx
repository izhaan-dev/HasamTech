import './Experience.css';

const Experience = () => {
  const projects = [
    // --- 2025 ---
    {
      company: "ADNOC, UAE",
      role: "SME for Near Real Time Optimization",
      date: "2025",
      desc: "Subject Matter Expert for near real-time optimization model development and deployment for six gas-plants and polymerization units."
    },
    {
      company: "SATORP AMIRAL PetChem, KSA",
      role: "Scheduling Model using APS and PS",
      date: "2025",
      desc: "Development and delivery of Refinery + PetChem Scheduling models using Aspen Petroleum Scheduler and Polymer Scheduling."
    },
    // --- 2024-2025 ---
    {
      company: "Shell Rheinland Refinery, Germany",
      role: "Scheduling Model Update using APS",
      date: "2024 - 2025",
      desc: "Scheduling Modelling SME for modification of the multi-refinery APS model, including logic updates and custom interface reporting."
    },
    {
      company: "Aarti Industries Ltd., India",
      role: "Octane Booster Consulting Study",
      date: "2024",
      desc: "Expert consultant for technical and commercial evaluation of Octane booster product, including economic value calculations."
    },
    // --- 2023-2024 ---
    {
      company: "Sriracha Refinery, Thailand",
      role: "Planning Model Implementation",
      date: "2023 - 2024",
      desc: "Project Technical Lead for converting legacy LP model to AUSC Plan for Bangchak Corporation."
    },
    // --- 2019-2024 (Long Term) ---
    {
      company: "McKinsey & Company",
      role: "Expert Senior Consultant",
      date: "2019 - 2024",
      desc: "SME for Refinery and Petrochemicals Planning and Optimization studies across India, Australia, SE Asia, and Saudi Arabia."
    },
    // --- 2022-2023 ---
    {
      company: "Dangote Refinery, Nigeria",
      role: "Scheduling Model Development",
      date: "2022 - 2023",
      desc: "Designing and delivering a refined Refinery Scheduling Model with custom logics for long-term scheduling necessities."
    },
    {
      company: "OQ, Oman",
      role: "PMC for Integrated Management Systems",
      date: "2022 - 2023",
      desc: "Project Management Consultant for Scheduling, Blending, and Logistics domains of the IMS project."
    },
    // --- 2021 ---
    {
      company: "Bangchak Refinery, Thailand",
      role: "Planning & Scheduling Model Development",
      date: "2021",
      desc: "Development of new Planning and Scheduling models using AVEVA USC Plan and Schedule, integrated with Assay."
    },
    // --- 2020 ---
    {
      company: "Astron Energy, South Africa",
      role: "Planning (LP) Model Development",
      date: "2020",
      desc: "Converted current Planning model to AVEVA USC Plan, fully integrated with AVEVA USC Assay."
    },
    // --- 2018-2019 ---
    {
      company: "Nayara Energy, India",
      role: "Refinery Wide Digitalization Solution",
      date: "2018 - 2019",
      desc: "Partner for Reports Automation, Dashboards, and KPI Management project execution and Go-live."
    },
    // --- 2018 ---
    {
      company: "Petronas, Malaysia",
      role: "SME - Scheduling & Blending",
      date: "2018",
      desc: "SME for RAPID project scheduling and blend optimization, providing high-end technical support to Accenture team."
    },
    // --- 2016-2018 ---
    {
      company: "ADNOC Refining, UAE",
      role: "PMC - Planning, Scheduling & Pricing",
      date: "2016 - 2018",
      desc: "Project Management Consultant for RIS project covering Production Planning, Scheduling, and Pricing domains."
    },
    // --- 2017 ---
    {
      company: "Petro Rabigh, KSA",
      role: "Scheduling Model using APS",
      date: "2017",
      desc: "Technical Lead for design, testing, and delivery of Liquid Scheduling Model for refinery and petrochemical complex."
    },
    // --- 2016-2017 ---
    {
      company: "BAPCO, Bahrain",
      role: "Real Time Energy Management",
      date: "2016 - 2017",
      desc: "Technical Project Lead for ERTO Models development using Soteica Visual Mesa."
    },
    // --- 2015-2016 ---
    {
      company: "YASREF, KSA",
      role: "Process Modelling using KBC Petro-SIM",
      date: "2015 - 2016",
      desc: "Technical Project Lead for Steady State Process Simulation Models development using KBC PetroSIM and VMGSim."
    },
    // --- 2014 ---
    {
      company: "REPSOL, Spain",
      role: "Scheduling & Blending Models",
      date: "2014",
      desc: "Senior Domain Expert Consultant for Integrated Supply Chain Project across Cartagena, Tarragona, and Puertollano refineries."
    },
    // --- 2013-2014 ---
    {
      company: "Oil Major in Middle East",
      role: "Global & Local LP Model Development",
      date: "2013 - 2014",
      desc: "Team Lead for development of Global and Local Planning models using Haverly GRTMPS."
    },
    // --- 2011-2013 ---
    {
      company: "KNPC MOG, Kuwait",
      role: "Onsite Technical Support Consultant",
      date: "2011 - 2013",
      desc: "Support and upgrade of Planning and Scheduling models for three KNPC refineries."
    },
    // --- 2010-2011 ---
    {
      company: "BAPCO, Bahrain",
      role: "Scheduling & Blending Models",
      date: "2010 - 2011",
      desc: "Led Scheduling & Blending Model Development Project using Aspen APS + MBO."
    },
    // --- 2007-2008 ---
    {
      company: "Essar Oil, India",
      role: "APS + MBO Models Development",
      date: "2007 - 2008",
      desc: "Focal Point Coordinator for APS+MBO Project Implementation and Head of Product/Unit Scheduling Desks."
    }
  ];

  return (
    <div className="experience-container">
      <div className="container">
        <div className="experience-header">
          <h2>Project Portfolio</h2>
          <p>Delivering specialized technical solutions for global energy leaders since 2007.</p>
        </div>
        
        <div className="timeline">
          {projects.map((proj, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date-badge">{proj.date}</span>
                <h3 className="timeline-company">{proj.company}</h3>
                <h4 className="timeline-role">{proj.role}</h4>
                <p className="timeline-desc">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;