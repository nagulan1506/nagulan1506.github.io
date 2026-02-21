import useScrollAnimation from '../hooks/useScrollAnimation';
import './Skills.css';

const Skills = () => {
    const [ref, isVisible] = useScrollAnimation();

    const skills = [
        { name: 'JavaScript', level: 92, icon: '⚡', color: '#f7df1e', category: 'Language' },
        { name: 'React', level: 94, icon: '⚛️', color: '#61dafb', category: 'Frontend' },
        { name: 'Node.js', level: 88, icon: '🟢', color: '#68a063', category: 'Backend' },
        { name: 'MongoDB', level: 86, icon: '🍃', color: '#4db33d', category: 'Database' },
        { name: 'Redux', level: 85, icon: '🔄', color: '#764abc', category: 'State' },
        { name: 'TailwindCSS', level: 90, icon: '🎨', color: '#38bdf8', category: 'Styling' },
        { name: 'HTML/CSS', level: 95, icon: '🌐', color: '#e34f26', category: 'Frontend' },
        { name: 'MySQL', level: 87, icon: '🗄️', color: '#00758f', category: 'Database' },
    ];

    return (
        <section className="skills-premium section" id="skills">
            <div className="container">
                <div className="premium-section-header">
                    <span className="premium-badge">Expertise</span>
                    <h2 className="premium-section-title">Tech Stack</h2>
                    <p className="premium-section-subtitle">
                        A curated collection of technologies I've mastered to build
                        high-performance digital solutions.
                    </p>
                </div>

                <div ref={ref} className={`skills-premium-grid ${isVisible ? 'visible' : ''}`}>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="premium-skill-card"
                            style={{
                                '--skill-color': skill.color,
                                transitionDelay: `${index * 0.1}s`
                            }}
                        >
                            <div className="skill-card-glow"></div>

                            <div className="skill-card-top">
                                <div className="skill-icon-box">
                                    <span className="skill-emoji">{skill.icon}</span>
                                </div>
                                <div className="skill-label-group">
                                    <h3 className="skill-title">{skill.name}</h3>
                                    <span className="skill-type">{skill.category}</span>
                                </div>
                            </div>

                            <div className="skill-card-bottom">
                                <div className="skill-progress-meta">
                                    <span className="skill-mastery">Proficiency</span>
                                    <span className="skill-percentage-value">{skill.level}%</span>
                                </div>
                                <div className="skill-progress-container">
                                    <div
                                        className="skill-progress-fill"
                                        style={{
                                            width: isVisible ? `${skill.level}%` : '0%',
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
