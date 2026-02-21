import useScrollAnimation from '../hooks/useScrollAnimation';
import './Skills.css';

const Skills = () => {
    const [ref, isVisible] = useScrollAnimation();

    const skills = [
        {
            name: 'JavaScript',
            level: 92,
            icon: '⚡',
            color: '#f7df1e',
            category: 'Language'
        },
        {
            name: 'React',
            level: 94,
            icon: '⚛️',
            color: '#61dafb',
            category: 'Frontend'
        },
        {
            name: 'Node.js',
            level: 88,
            icon: '🟢',
            color: '#68a063',
            category: 'Backend'
        },
        {
            name: 'MongoDB',
            level: 86,
            icon: '🍃',
            color: '#4db33d',
            category: 'Database'
        },
        {
            name: 'Redux',
            level: 85,
            icon: '🔄',
            color: '#764abc',
            category: 'State'
        },
        {
            name: 'TailwindCSS',
            level: 90,
            icon: '🎨',
            color: '#38bdf8',
            category: 'Styling'
        },
        {
            name: 'HTML/CSS',
            level: 95,
            icon: '🌐',
            color: '#e34f26',
            category: 'Frontend'
        },
        {
            name: 'MySQL',
            level: 87,
            icon: '🗄️',
            color: '#00758f',
            category: 'Database'
        },
    ];

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <h2 className="section-title">Tech Stack</h2>
                <p className="section-subtitle">Technologies I work with to bring ideas to life</p>

                <div ref={ref} className={`skills-grid stagger-children ${isVisible ? 'visible' : ''}`}>
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card glass-card">
                            <div className="skill-icon-wrapper" style={{ '--skill-color': skill.color }}>
                                <span className="skill-icon">{skill.icon}</span>
                            </div>
                            <div className="skill-info">
                                <div className="skill-header">
                                    <h3 className="skill-name">{skill.name}</h3>
                                    <span className="skill-category">{skill.category}</span>
                                </div>
                                <div className="skill-bar-wrapper">
                                    <div
                                        className="skill-bar"
                                        style={{
                                            '--skill-width': `${isVisible ? skill.level : 0}%`,
                                            '--skill-color': skill.color,
                                            transitionDelay: `${0.3 + index * 0.1}s`
                                        }}
                                    >
                                        <span className="skill-percentage">{skill.level}%</span>
                                    </div>
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
