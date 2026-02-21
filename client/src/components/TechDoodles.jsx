import './TechDoodles.css';

const TechDoodles = () => {
    return (
        <div className="tech-doodles" aria-hidden="true">
            {/* Code brackets */}
            <svg className="doodle doodle-1" width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18,15 8,30 18,45" />
                <polyline points="42,15 52,30 42,45" />
            </svg>

            {/* React atom */}
            <svg className="doodle doodle-2" width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1">
                <ellipse cx="25" cy="25" rx="20" ry="8" />
                <ellipse cx="25" cy="25" rx="20" ry="8" transform="rotate(60 25 25)" />
                <ellipse cx="25" cy="25" rx="20" ry="8" transform="rotate(120 25 25)" />
                <circle cx="25" cy="25" r="3" fill="currentColor" />
            </svg>

            {/* Database cylinder */}
            <svg className="doodle doodle-3" width="40" height="50" viewBox="0 0 40 50" fill="none" stroke="currentColor" strokeWidth="1.5">
                <ellipse cx="20" cy="10" rx="16" ry="6" />
                <line x1="4" y1="10" x2="4" y2="40" />
                <line x1="36" y1="10" x2="36" y2="40" />
                <ellipse cx="20" cy="40" rx="16" ry="6" />
            </svg>

            {/* Git branch */}
            <svg className="doodle doodle-4" width="40" height="55" viewBox="0 0 40 55" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="20" cy="8" r="5" />
                <circle cx="32" cy="28" r="5" />
                <circle cx="20" cy="48" r="5" />
                <line x1="20" y1="13" x2="20" y2="43" />
                <path d="M20 23 Q20 28 27 28" />
            </svg>

            {/* Terminal */}
            <svg className="doodle doodle-5" width="55" height="45" viewBox="0 0 55 45" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="51" height="41" rx="4" />
                <polyline points="14,16 22,22 14,28" />
                <line x1="26" y1="28" x2="38" y2="28" />
            </svg>

            {/* API endpoint */}
            <svg className="doodle doodle-6" width="45" height="45" viewBox="0 0 45 45" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="22" cy="22" r="18" />
                <path d="M10 22 L34 22" />
                <path d="M22 10 L22 34" />
                <circle cx="22" cy="22" r="6" />
            </svg>

            {/* Curly braces */}
            <svg className="doodle doodle-7" width="35" height="55" viewBox="0 0 35 55" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M12 5 Q5 5 5 15 L5 22 Q5 27 2 27 Q5 27 5 32 L5 40 Q5 50 12 50" />
                <path d="M23 5 Q30 5 30 15 L30 22 Q30 27 33 27 Q30 27 30 32 L30 40 Q30 50 23 50" />
            </svg>

            {/* Cloud */}
            <svg className="doodle doodle-8" width="60" height="40" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 32 Q5 32 5 24 Q5 16 15 16 Q15 6 28 6 Q40 6 42 14 Q50 12 54 20 Q58 28 48 32 Z" />
            </svg>

            {/* Binary */}
            <div className="doodle doodle-9 doodle-text">01</div>
            <div className="doodle doodle-10 doodle-text">{"{ }"}</div>
            <div className="doodle doodle-11 doodle-text">npm</div>
            <div className="doodle doodle-12 doodle-text">&lt;/&gt;</div>
        </div>
    );
};

export default TechDoodles;
