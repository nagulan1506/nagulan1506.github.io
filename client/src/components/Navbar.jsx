import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine active section
            const sections = navLinks.map(link => document.getElementById(link.id));
            const scrollPos = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPos) {
                    setActiveSection(navLinks[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
            <div className="navbar-container container">
                <a className="navbar-logo" onClick={() => scrollToSection('home')}>
                    <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="64" height="64" rx="16" fill="#0a0a1a" />
                        <rect x="2" y="2" width="60" height="60" rx="14" fill="none" stroke="url(#navGrad)" strokeWidth="2" />
                        <defs>
                            <linearGradient id="navGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#00d4ff" />
                                <stop offset="100%" stopColor="#7b2ff7" />
                            </linearGradient>
                        </defs>
                        <text x="32" y="44" textAnchor="middle" fontFamily="'Segoe UI','Helvetica',Arial,sans-serif" fontSize="30" fontWeight="700" fill="url(#navGrad)">NS</text>
                    </svg>
                </a>

                <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                            onClick={() => scrollToSection(link.id)}
                        >
                            {link.label}
                            <span className="nav-link-indicator"></span>
                        </a>
                    ))}
                </div>

                <a className="navbar-cta btn-primary" onClick={() => scrollToSection('contact')}>
                    Let's Talk
                </a>

                <button
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
