import { useState, useEffect } from 'react';
import logo from '../assets/ns-logo-blue.png';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'lifestyle', label: 'Lifestyle' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'chess', label: 'Vibe - Stress free' },
        { id: 'calendar', label: 'Calendar' },
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
                    <img src="ns.png" alt="NS Logo" className="navbar-badge" />
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
