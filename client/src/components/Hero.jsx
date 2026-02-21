import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopIndex, setLoopIndex] = useState(0);

    const titles = [
        'MERN Stack Developer',
        'Full Stack Engineer',
        'React Specialist',
        'Node.js Developer',
    ];

    useEffect(() => {
        const currentTitle = titles[loopIndex % titles.length];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentTitle.substring(0, displayText.length + 1));
                if (displayText === currentTitle) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setDisplayText(currentTitle.substring(0, displayText.length - 1));
                if (displayText === '') {
                    setIsDeleting(false);
                    setLoopIndex(loopIndex + 1);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, loopIndex]);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero section" id="home">
            {/* Animated Background Elements */}
            <div className="hero-bg">
                <div className="hero-orb hero-orb-1"></div>
                <div className="hero-orb hero-orb-2"></div>
                <div className="hero-orb hero-orb-3"></div>
                <div className="hero-grid"></div>
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                    <div className="shape shape-5"></div>
                </div>
            </div>

            <div className="hero-content container">
                <div className="hero-main">
                    <div className="hero-text">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Available for opportunities
                        </div>

                        <h1 className="hero-name">
                            <span className="hero-greeting">Hello, I'm</span>
                            <span className="hero-name-text">NAGULAN SARAVANAN</span>
                        </h1>

                        <div className="hero-title-wrapper">
                            <span className="hero-title-text">{displayText}</span>
                            <span className="hero-cursor">|</span>
                        </div>

                        <p className="hero-description">
                            Crafting scalable web applications with modern technologies.
                            Passionate about clean code, innovative solutions, and building
                            products that make a difference.
                        </p>

                        <div className="hero-cta">
                            <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg>
                                View My Work
                            </button>
                            <button className="btn-outline" onClick={() => scrollToSection('contact')}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                Get In Touch
                            </button>
                        </div>

                        <div className="hero-socials">
                            <a href="https://linkedin.com/in/nagulan-saravanan-0a4586397" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="https://github.com/nagulan1506" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="mailto:nagulans6524@gmail.com" className="social-link" title="Email">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Profile Photo */}
                    <div className="hero-photo-wrapper">
                        <div className="hero-photo-glow"></div>
                        <div className="hero-photo-ring">
                            <img src="/profile.jpg" alt="NAGULAN SARAVANAN" className="hero-photo" />
                        </div>
                        <div className="hero-photo-accent"></div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
                    <div className="scroll-mouse">
                        <div className="scroll-dot"></div>
                    </div>
                    <span>Scroll Down</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
