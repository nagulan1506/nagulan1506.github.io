import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Projects.css';

const Projects = () => {
    const [ref, isVisible] = useScrollAnimation();
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Real Estate App',
            period: 'Jan 2026 - Feb 2026',
            description: 'A full-featured MERN-based Real Estate platform for browsing, listing, and managing properties with an intuitive user experience.',
            details: [
                'Designed and developed a MERN-based Real Estate platform with React frontend and Node.js backend',
                'Created REST APIs using Express.js and MongoDB for property and user management',
                'Integrated JWT-based authentication and protected routes',
                'Ensured modular code structure and scalable backend architecture',
            ],
            tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
            gradient: 'linear-gradient(135deg, #00d4ff, #7b2ff7)',
            icon: '🏠',
            github: 'https://github.com/nagulan1506',
        },
        {
            id: 2,
            title: 'Parking App',
            period: 'Dec 2025 - Feb 2026',
            description: 'A comprehensive MERN-based Parking application with slot booking, payment integration, and real-time transaction management.',
            details: [
                'Built a MERN-based Parking application with React frontend and Node.js backend',
                'Developed APIs for slot booking, user management, and transaction handling',
                'Integrated payment gateway with secure order creation and payment verification',
                'Used MongoDB for efficient data storage and Express.js for backend services',
            ],
            tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Payment Gateway'],
            gradient: 'linear-gradient(135deg, #7b2ff7, #ff2d95)',
            icon: '🅿️',
            github: 'https://github.com/nagulan1506',
        },
    ];

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">Real-world applications I've designed and developed</p>

                <div ref={ref} className={`projects-grid ${isVisible ? 'visible' : ''}`}>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-card glass-card ${activeProject === project.id ? 'expanded' : ''}`}
                            style={{ '--project-gradient': project.gradient, animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="project-card-header" style={{ background: project.gradient }}>
                                <div className="project-header-overlay">
                                    <span className="project-icon">{project.icon}</span>
                                    <div className="project-period">{project.period}</div>
                                </div>
                            </div>

                            <div className="project-card-body">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tech-stack">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-badge">{tech}</span>
                                    ))}
                                </div>

                                <button
                                    className="project-toggle"
                                    onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                                >
                                    {activeProject === project.id ? 'Show Less' : 'View Details'}
                                    <svg
                                        width="16" height="16" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className={`toggle-icon ${activeProject === project.id ? 'rotated' : ''}`}
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </button>

                                <div className={`project-details ${activeProject === project.id ? 'open' : ''}`}>
                                    <ul className="details-list">
                                        {project.details.map((detail, i) => (
                                            <li key={i}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
