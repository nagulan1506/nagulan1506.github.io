import useScrollAnimation from '../hooks/useScrollAnimation';
import './Education.css';

const Education = () => {
    const [ref, isVisible] = useScrollAnimation();

    const timeline = [
        {
            type: 'education',
            title: 'Bachelor of Engineering',
            institution: 'Birla Institute of Technology, Ranchi Mesra',
            field: 'Biotechnology',
            location: 'Ranchi, Jharkhand',
            year: '2022',
            icon: '🎓',
            gradient: 'linear-gradient(135deg, #00d4ff, #7b2ff7)',
        },
        {
            type: 'certification',
            title: 'MERN Stack Developer',
            institution: 'GUVI - IITM Pravartak',
            field: 'Full Stack Web Development',
            location: 'Online',
            year: '2025',
            icon: '📜',
            gradient: 'linear-gradient(135deg, #7b2ff7, #ff2d95)',
        },
    ];

    return (
        <section className="education section" id="education">
            <div className="container">
                <h2 className="section-title">Education & Certifications</h2>
                <p className="section-subtitle">My academic journey and professional development</p>

                <div ref={ref} className={`timeline ${isVisible ? 'visible' : ''}`}>
                    <div className="timeline-line"></div>

                    {timeline.map((item, index) => (
                        <div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            style={{ animationDelay: `${index * 0.3}s` }}
                        >
                            <div className="timeline-dot" style={{ background: item.gradient }}>
                                <span>{item.icon}</span>
                            </div>

                            <div className="timeline-card glass-card">
                                <div className="timeline-card-accent" style={{ background: item.gradient }}></div>
                                <div className="timeline-card-content">
                                    <span className="timeline-type-badge" style={{
                                        background: `${item.type === 'education' ? 'rgba(0, 212, 255, 0.1)' : 'rgba(123, 47, 247, 0.1)'}`,
                                        color: `${item.type === 'education' ? 'var(--accent-blue)' : 'var(--accent-purple)'}`
                                    }}>
                                        {item.type === 'education' ? 'Education' : 'Certification'}
                                    </span>
                                    <h3 className="timeline-title">{item.title}</h3>
                                    <p className="timeline-institution">{item.institution}</p>
                                    <p className="timeline-field">{item.field}</p>
                                    <div className="timeline-meta">
                                        <span className="timeline-location">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            {item.location}
                                        </span>
                                        <span className="timeline-year">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                <line x1="16" y1="2" x2="16" y2="6" />
                                                <line x1="8" y1="2" x2="8" y2="6" />
                                                <line x1="3" y1="10" x2="21" y2="10" />
                                            </svg>
                                            {item.year}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Languages Section */}
                <div className={`languages-section ${isVisible ? 'visible' : ''}`}>
                    <h3 className="languages-title">Languages</h3>
                    <div className="languages-grid">
                        <div className="language-card glass-card">
                            <span className="language-emoji">🇮🇳</span>
                            <span className="language-name">Tamil</span>
                            <span className="language-level">Native</span>
                        </div>
                        <div className="language-card glass-card">
                            <span className="language-emoji">🇬🇧</span>
                            <span className="language-name">English</span>
                            <span className="language-level">Professional</span>
                        </div>
                        <div className="language-card glass-card">
                            <span className="language-emoji">🇮🇳</span>
                            <span className="language-name">Hindi</span>
                            <span className="language-level">Professional</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
