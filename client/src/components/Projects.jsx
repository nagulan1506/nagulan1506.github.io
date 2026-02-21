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
            subtitle: 'MERN Stack Platform',
            description: 'A premium property management platform with real-time listings, advanced filtering, and secure user authentication.',
            details: [
                'Full-stack development with React and Node.js',
                'Secure JWT authentication and role-based access',
                'Advanced property search and filter logic',
                'Scalable MongoDB architecture for high performance'
            ],
            tech: ['React', 'Node.js', 'MongoDB', 'Express'],
            image: null,
            icon: '🏠',
            github: 'https://github.com/nagulan1506/real-estate-app',
        },
        {
            id: 2,
            title: 'namma PARK',
            subtitle: 'Smart Parking Solution',
            description: 'Intelligent city parking management system featuring real-time slot tracking and integrated mobile payments.',
            details: [
                'Real-time slot availability tracking system',
                'Seamless payment gateway integration',
                'Comprehensive booking and reservation logic',
                'Professional admin dashboard for city management'
            ],
            tech: ['React', 'Node.js', 'Express', 'Payments'],
            image: '/parking-logo.png',
            icon: '🅿️',
            github: 'https://github.com/nagulan1506',
        },
    ];

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Selected Works</h2>
                    <p className="section-subtitle">A collection of premium applications built with precision and modern technology.</p>
                </div>

                <div ref={ref} className={`projects-grid ${isVisible ? 'visible' : ''}`}>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-card ${activeProject === project.id ? 'active' : ''}`}
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="project-display">
                                {project.image ? (
                                    <div className="project-image-box">
                                        <img src={project.image} alt={project.title} className="project-main-img" />
                                    </div>
                                ) : (
                                    <div className="project-icon-box" style={{ background: project.id === 1 ? 'linear-gradient(135deg, #6366F1, #3B82F6)' : 'linear-gradient(135deg, #3B82F6, #6366F1)' }}>
                                        <span className="project-icon-text">{project.icon}</span>
                                    </div>
                                )}
                            </div>

                            <div className="project-info">
                                <span className="project-tag">{project.subtitle}</span>
                                <h3 className="project-heading">{project.title}</h3>
                                <p className="project-summary">{project.description}</p>

                                <div className="project-tech-tags">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-pill">{t}</span>
                                    ))}
                                </div>

                                <div className="project-action-row">
                                    <button
                                        className="btn-text"
                                        onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                                    >
                                        {activeProject === project.id ? 'Summary' : 'Key Features'}
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={activeProject === project.id ? 'rotate' : ''}>
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </button>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-github-link">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </a>
                                </div>

                                <div className={`project-expand-body ${activeProject === project.id ? 'expanded' : ''}`}>
                                    <ul className="project-feature-list">
                                        {project.details.map((detail, dIndex) => (
                                            <li key={dIndex}>{detail}</li>
                                        ))}
                                    </ul>
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
