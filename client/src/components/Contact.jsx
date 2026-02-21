import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Contact.css';

const Contact = () => {
    const [ref, isVisible] = useScrollAnimation();
    const [formData, setFormData] = useState({
        name: '', email: '', subject: '', message: '',
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const res = await fetch('https://nagulan-portfolio-backend.onrender.com/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (data.success) {
                setStatus({ type: 'success', message: 'Message sent! I\'ll get back to you soon.' });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.error });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact-premium section" id="contact">
            <div className="container">
                <div ref={ref} className={`contact-premium-wrapper ${isVisible ? 'visible' : ''}`}>

                    {/* Header Side */}
                    <div className="contact-premium-header">
                        <span className="premium-label">Available for work</span>
                        <h2 className="premium-big-title">
                            Let's start something <br />
                            <span className="gradient-text">meaningful.</span>
                        </h2>
                        <p className="contact-pitch">
                            Whether you have a specific project in mind or just want to
                            discuss the future of web technology, my inbox is always open.
                        </p>

                        <div className="contact-quick-info">
                            <div className="quick-item">
                                <span className="quick-label">Email</span>
                                <a href="mailto:nagulans6524@gmail.com" className="quick-value underline-link">nagulans6524@gmail.com</a>
                            </div>
                            <div className="quick-item">
                                <span className="quick-label">Current Location</span>
                                <span className="quick-value">Salem, TN, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="contact-premium-form-box">
                        <form className="premium-form" onSubmit={handleSubmit}>
                            <div className="premium-input-grid">
                                <div className="premium-field">
                                    <input
                                        type="text" name="name" id="name" required
                                        placeholder=" " value={formData.name} onChange={handleChange}
                                    />
                                    <label htmlFor="name">Full Name</label>
                                </div>
                                <div className="premium-field">
                                    <input
                                        type="email" name="email" id="email" required
                                        placeholder=" " value={formData.email} onChange={handleChange}
                                    />
                                    <label htmlFor="email">Email Address</label>
                                </div>
                            </div>

                            <div className="premium-field">
                                <input
                                    type="text" name="subject" id="subject" required
                                    placeholder=" " value={formData.subject} onChange={handleChange}
                                />
                                <label htmlFor="subject">Subject</label>
                            </div>

                            <div className="premium-field">
                                <textarea
                                    name="message" id="message" rows="4" required
                                    placeholder=" " value={formData.message} onChange={handleChange}
                                />
                                <label htmlFor="message">How can I help you?</label>
                            </div>

                            {status.message && (
                                <div className={`premium-form-status ${status.type}`}>
                                    {status.message}
                                </div>
                            )}

                            <button type="submit" className="premium-submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Initialize Conversation'}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
