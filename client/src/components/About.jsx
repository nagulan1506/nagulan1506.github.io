import useScrollAnimation from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
    const [ref, isVisible] = useScrollAnimation();

    const stats = [
        { number: '2+', label: 'Featured Projects', icon: '🚀' },
        { number: '8+', label: 'Tech Stack', icon: '💻' },
        { number: 'GUVI', label: 'Certified', icon: '🎓' },
        { number: 'Chennai', label: 'Location', icon: '📍' },
    ];

    return (
        <section className="about section" id="about">
            <div className="container">
                <div ref={ref} className={`about-premium-grid ${isVisible ? 'visible' : ''}`}>

                    {/* Left Column: Visual & Brand */}
                    <div className="about-visual-side">
                        <div className="premium-label-wrapper">
                            <span className="premium-label">Visionary Developer</span>
                        </div>
                        <h2 className="premium-title">
                            Crafting logical <br />
                            <span className="gradient-text">excellence</span> in <br />
                            modern web.
                        </h2>

                        <div className="about-bento-stats">
                            {stats.map((stat, index) => (
                                <div key={index} className="bento-stat-card">
                                    <span className="bento-stat-icon">{stat.icon}</span>
                                    <div className="bento-stat-content">
                                        <span className="bento-stat-number">{stat.number}</span>
                                        <span className="bento-stat-label">{stat.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Content & Narrative */}
                    <div className="about-content-side">
                        <div className="about-story">
                            <h3 className="story-heading">Beyond the Code</h3>
                            <p className="story-text">
                                Highly disciplined and goal-oriented Software Developer with a unique perspective.
                                My background in UPSC preparation isn't just a history—it's my foundation
                                for deep analytical thinking, unwavering consistency, and the ability to thrive
                                under intense pressure.
                            </p>
                            <p className="story-text">
                                I don't just "build apps"—I architect solutions that balance performance,
                                logic, and aesthetic beauty. My specialization in the MERN stack is fueled
                                by a passion for turning complex problems into intuitive digital experiences.
                            </p>
                        </div>

                        <div className="about-traits">
                            <div className="trait-card">
                                <div className="trait-icon">🎯</div>
                                <div className="trait-info">
                                    <h4>Goal Oriented</h4>
                                    <p>Focusing on measurable outcomes and efficient delivery.</p>
                                </div>
                            </div>
                            <div className="trait-card">
                                <div className="trait-icon">🧠</div>
                                <div className="trait-info">
                                    <h4>Analytical Mindset</h4>
                                    <p>Logic-driven approach learned from rigorous civil service preparation.</p>
                                </div>
                            </div>
                        </div>

                        <div className="about-signature">
                            <span className="sig-text">Nagulan Saravanan</span>
                            <span className="sig-sub">MERN Stack Developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
