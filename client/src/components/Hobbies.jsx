import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Hobbies.css';

const Hobbies = () => {
    const [ref, isVisible] = useScrollAnimation();
    const [animating, setAnimating] = useState({});

    const triggerAnimation = (id) => {
        if (animating[id]) return;
        setAnimating(prev => ({ ...prev, [id]: true }));
        setTimeout(() => {
            setAnimating(prev => ({ ...prev, [id]: false }));
        }, 5000);
    };

    const hobbies = [
        { id: 'ncc', name: 'NCC', icon: '🎖️', desc: 'National Cadet Corps - Discipline & Duty' },
        { id: 'cricket', name: 'Cricket', icon: '🏏', desc: 'Strategic Play & Team Spirit' },
        { id: 'cooking', name: 'Cooking', icon: '👨‍🍳', desc: 'Culinary Arts & Flavor Fusion' },
        { id: 'swimming', name: 'Swimming', icon: '🏊‍♂️', desc: 'Endurance & Physical Agility' },
        { id: 'cycling', name: 'Cycling', icon: '🚴‍♂️', desc: 'Exploring Paths & Staying Fit' },
        { id: 'notes', name: 'Note making', icon: '✍️', desc: 'Structuring Knowledge & Ideas' },
    ];

    return (
        <section className="hobbies section" id="lifestyle">
            <div className="container">
                <div className="premium-section-header">
                    <span className="premium-badge">Lifestyle</span>
                    <h2 className="premium-section-title">Hobbies & Interests</h2>
                    <p className="premium-section-subtitle">
                        What I do when I'm not coding or solving logical puzzles.
                        <br /><small>(Click any card to see the passion in motion)</small>
                    </p>
                </div>

                <div ref={ref} className={`hobbies-grid ${isVisible ? 'visible' : ''}`}>
                    {hobbies.map((hobby, index) => (
                        <div
                            key={hobby.id}
                            className={`hobby-card ${animating[hobby.id] ? `animating-${hobby.id}` : ''}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                            onClick={() => triggerAnimation(hobby.id)}
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
