import { useState, useEffect, useRef } from 'react';
import './GeminiAssistant.css';

const GeminiAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I'm your Gemini AI assistant. How can I help you learn more about Nagulan?", isBot: true }
    ]);
    const [input, setInput] = useState('');
    const [isSpeaking, setIsSpeaking] = useState(false);
    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const speak = (text) => {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.rate = 1.0; // Normal speed
        utterance.pitch = 1.1; // Slightly higher pitch for a friendly AI feel

        window.speechSynthesis.speak(utterance);
    };

    const stopSpeaking = () => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
    };

    const askGemini = async (question) => {
        const q = question.toLowerCase();
        let response = "";

        if (q.includes('projects') || q.includes('work')) {
            response = "Nagulan has worked on several impressive projects including 'namma PARK', a smart parking solution, and a premium Real Estate platform built with the MERN stack.";
        } else if (q.includes('skills') || q.includes('tech')) {
            response = "Nagulan is proficient in the MERN stack: MongoDB, Express.js, React, and Node.js. He also has strong logical reasoning and problem-solving skills.";
        } else if (q.includes('education') || q.includes('college')) {
            response = "Nagulan is a Bachelor of Engineering graduate from BIT Mesra, Ranchi, with a 2022 graduation year. He is also MERN stack certified by GUVI-IITM.";
        } else if (q.includes('contact') || q.includes('email')) {
            response = "You can reach Nagulan via email at nagulans6524@gmail.com or call him at +91 8084004747.";
        } else if (q.includes('about') || q.includes('who')) {
            response = "Nagulan is a disciplined and goal-oriented Software Developer. He previously prepared for UPSC, which honed his analytical and logical reasoning skills.";
        } else {
            response = "I'm a specialized AI assistant for Nagulan's portfolio. You can ask me about his projects, skills, education, or how to contact him!";
        }

        const botMessage = { text: response, isBot: true };
        setMessages(prev => [...prev, botMessage]);
        speak(response);
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { text: input, isBot: false };
        setMessages(prev => [...prev, userMsg]);
        const currentInput = input;
        setInput('');

        setTimeout(() => askGemini(currentInput), 500);
    };

    return (
        <div className={`gemini-assistant ${isOpen ? 'open' : ''}`}>
            {/* Floating Toggle Button */}
            <button className="assistant-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <div className="assistant-icon-wrapper">
                        <svg className="gemini-spin" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" strokeDasharray="15 15"></circle>
                        </svg>
                        <span className="ai-label">AI</span>
                    </div>
                )}
            </button>

            {/* Chat Window */}
            <div className="assistant-window">
                <div className="assistant-header">
                    <div className="header-info">
                        <div className="ai-dot active"></div>
                        <span>Gemini Assistant</span>
                    </div>
                    {isSpeaking && (
                        <button className="stop-speech" onClick={stopSpeaking}>
                            <div className="voice-waves">
                                <span></span><span></span><span></span>
                            </div>
                        </button>
                    )}
                </div>

                <div className="assistant-messages">
                    {messages.map((msg, i) => (
                        <div key={i} className={`message-wrapper ${msg.isBot ? 'bot' : 'user'}`}>
                            <div className="message-content">
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    <div ref={chatEndRef} />
                </div>

                <form className="assistant-input-area" onSubmit={handleSend}>
                    <input
                        type="text"
                        placeholder="Ask me something..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit" className="send-btn" disabled={!input.trim()}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GeminiAssistant;
