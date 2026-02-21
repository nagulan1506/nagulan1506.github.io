import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer-premium">
            <div className="container">
                <div className="footer-premium-content">

                    <div className="footer-main-row">
                        <div className="footer-brand-side">
                            <h2 className="footer-brand-title" onClick={() => scrollToSection('home')}>
                                Nagulan Saravanan
                            </h2>
                            <p className="footer-brand-desc">
                                Specializing in high-end MERN Stack development. <br />
                                Turning logical complexity into digital poetry.
                            </p>
                            <div className="footer-social-row">
                                <a href="https://linkedin.com/in/nagulan-saravanan-0a4586397" target="_blank" rel="noopener noreferrer" className="footer-social-pill">LinkedIn</a>
                                <a href="https://github.com/nagulan1506" target="_blank" rel="noopener noreferrer" className="footer-social-pill">GitHub</a>
                                <a href="mailto:nagulans6524@gmail.com" className="footer-social-pill">Email</a>
                            </div>
                        </div>

                        <div className="footer-links-side">
                            <div className="footer-links-group">
                                <h3>Navigation</h3>
                                <ul>
                                    <li><a onClick={() => scrollToSection('about')}>About</a></li>
                                    <li><a onClick={() => scrollToSection('skills')}>Expertise</a></li>
                                    <li><a onClick={() => scrollToSection('projects')}>Work</a></li>
                                    <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom-row">
                        <div className="footer-copyright">
                            © {currentYear} Nagulan Saravanan. All rights reserved.
                        </div>
                        <div className="footer-tech-meta">
                            Built with precision using React & Node.js
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
