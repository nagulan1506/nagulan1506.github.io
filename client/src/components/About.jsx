import useScrollAnimation from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
    const [ref, isVisible] = useScrollAnimation();

    const stats = [
        { number: '2+', label: 'Projects Built' },
        { number: '8+', label: 'Technologies' },
        { number: '3', label: 'Languages' },
        { number: '1', label: 'Certification' },
    ];

    return (
        <section className="about section" id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">Get to know the person behind the code</p>

                <div ref={ref} className={`about-content ${isVisible ? 'visible' : ''}`}>
                    <div className="about-text-card glass-card">
                        <div className="about-accent-line"></div>
                        <h3 className="about-heading">
                            A passionate developer building the <span className="gradient-text">future of web</span>
                        </h3>
                        <p className="about-description">
                            Highly disciplined and goal-oriented Software Developer with a strong aptitude
                            for logical reasoning and coding. My journey into tech is unique — I dedicated time
                            to UPSC preparation, gaining deep analytical skills, consistency, and the ability
                            to perform under pressure.
                        </p>
                        <p className="about-description">
                            Now focused on building a long-term career in software development, I bring the same
                            discipline and analytical mindset to crafting scalable, elegant web applications.
                            I specialize in the MERN stack and love turning complex problems into simple,
                            beautiful solutions.
                        </p>
                        <div className="about-highlights">
                            <div className="highlight-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span>BIT Mesra Graduate (B.E.)</span>
                            </div>
                            <div className="highlight-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span>MERN Stack Certified (GUVI - IITM)</span>
                            </div>
                            <div className="highlight-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span>Full-Stack Development</span>
                            </div>
                            <div className="highlight-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span>REST API & Database Design</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-stats stagger-children">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card glass-card">
                                <span className="stat-number gradient-text">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
