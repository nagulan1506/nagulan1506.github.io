import useScrollAnimation from '../hooks/useScrollAnimation';
import './Hobbies.css';

const Hobbies = () => {
    const [ref, isVisible] = useScrollAnimation();

    const hobbies = [
        { id: 1, name: 'NCC', icon: '🎖️', desc: 'National Cadet Corps - Discipline & Duty' },
        { id: 2, name: 'Cricket', icon: '🏏', desc: 'Strategic Play & Team Spirit' },
        { id: 3, name: 'Cooking', icon: '👨‍🍳', desc: 'Culinary Arts & Flavor Fusion' },
        { id: 4, name: 'Swimming', icon: '🏊‍♂️', desc: 'Endurance & Physical Agility' },
        { id: 5, name: 'Cycling', icon: '🚴‍♂️', desc: 'Exploring Paths & Staying Fit' },
        { id: 6, name: 'Note making', icon: '✍️', desc: 'Structuring Knowledge & Ideas' },
    ];

    return (
        <section className="hobbies section" id="lifestyle">
            <div className="container">
                <div className="premium-section-header">
                    <span className="premium-badge">Lifestyle</span>
                    <h2 className="premium-section-title">Hobbies & Interests</h2>
                    <p className="premium-section-subtitle">
                        What I do when I'm not coding or solving logical puzzles.
                    </p>
                </div>

                <div ref={ref} className={`hobbies-grid ${isVisible ? 'visible' : ''}`}>
                    {hobbies.map((hobby, index) => (
                        <div
                            key={hobby.id}
                            className="hobby-card"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="hobby-icon-wrapper">
                                <span className="hobby-emoji">{hobby.icon}</span>
                            </div>
                            <div className="hobby-info">
                                <h3 className="hobby-name">{hobby.name}</h3>
                                <p className="hobby-desc">{hobby.desc}</p>
                            </div>
                            <div className="hobby-card-glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hobbies;
