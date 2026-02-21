import { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Calendar.css';

const Calendar = () => {
    const [ref, isVisible] = useScrollAnimation(0.1);
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    // Minutes logging state
    const [loggedMinutes, setLoggedMinutes] = useState(() => {
        const saved = localStorage.getItem('portfolio_calendar_minutes');
        return saved ? JSON.parse(saved) : {};
    });
    const [editingDay, setEditingDay] = useState(null);
    const [minutesInput, setMinutesInput] = useState('');

    useEffect(() => {
        localStorage.setItem('portfolio_calendar_minutes', JSON.stringify(loggedMinutes));
    }, [loggedMinutes]);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Key dates / milestones
    const milestones = {
        '2025-06': { label: 'GUVI Certification', type: 'cert' },
        '2025-09': { label: 'B.E. Graduation', type: 'edu' },
    };

    const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

    const prevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const goToToday = () => {
        setCurrentMonth(today.getMonth());
        setCurrentYear(today.getFullYear());
    };

    const handleDayClick = (day) => {
        const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        setEditingDay(dateKey);
        setMinutesInput(loggedMinutes[dateKey] || '');
    };

    const saveMinutes = (e) => {
        e.preventDefault();
        if (editingDay) {
            const newLogs = { ...loggedMinutes };
            if (minutesInput === '' || isNaN(minutesInput)) {
                delete newLogs[editingDay];
            } else {
                newLogs[editingDay] = parseInt(minutesInput);
            }
            setLoggedMinutes(newLogs);
            setEditingDay(null);
        }
    };

    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const monthKey = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`;
    const milestone = milestones[monthKey];

    const isToday = (day) =>
        day === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();

    const cells = [];
    for (let i = 0; i < firstDay; i++) {
        cells.push(<div key={`empty-${i}`} className="calendar-cell empty"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
        const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const minutes = loggedMinutes[dateKey];

        cells.push(
            <div
                key={day}
                className={`calendar-cell ${isToday(day) ? 'today' : ''} ${minutes ? 'has-minutes' : ''}`}
                onClick={() => handleDayClick(day)}
            >
                <span className="cell-day">{day}</span>
                {minutes && <span className="cell-minutes">{minutes}m</span>}
            </div>
        );
    }

    return (
        <section className="calendar section" id="calendar">
            <h2 className="section-title">Productivity Tracker</h2>
            <p className="section-subtitle">Log your daily coding/learning minutes and track your consistency.</p>

            <div
                ref={ref}
                className={`calendar-wrapper animate-on-scroll ${isVisible ? 'visible' : ''}`}
            >
                <div className="calendar-card glass-card">
                    <div className="calendar-header">
                        <button className="cal-nav-btn" onClick={prevMonth} aria-label="Previous month">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15,18 9,12 15,6" />
                            </svg>
                        </button>
                        <div className="cal-month-year">
                            <span className="cal-month">{monthNames[currentMonth]}</span>
                            <span className="cal-year">{currentYear}</span>
                        </div>
                        <button className="cal-nav-btn" onClick={nextMonth} aria-label="Next month">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9,18 15,12 9,6" />
                            </svg>
                        </button>
                    </div>

                    <button className="cal-today-btn" onClick={goToToday}>Today</button>

                    <div className="calendar-grid">
                        {dayNames.map(d => (
                            <div key={d} className="calendar-day-name">{d}</div>
                        ))}
                        {cells}
                    </div>

                    {milestone && (
                        <div className={`cal-milestone milestone-${milestone.type}`}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                            {milestone.label}
                        </div>
                    )}
                </div>

                <div className="calendar-info glass-card">
                    <h3 className="cal-info-title">Daily Minutes Log</h3>

                    {editingDay ? (
                        <form className="log-form" onSubmit={saveMinutes}>
                            <p className="log-date">Logging for: <strong>{editingDay}</strong></p>
                            <div className="form-group">
                                <label>Minutes Spent</label>
                                <input
                                    type="number"
                                    autoFocus
                                    value={minutesInput}
                                    onChange={(e) => setMinutesInput(e.target.value)}
                                    placeholder="e.g. 120"
                                />
                            </div>
                            <div className="form-actions">
                                <button type="submit" className="btn-save">Save</button>
                                <button type="button" className="btn-cancel" onClick={() => setEditingDay(null)}>Cancel</button>
                            </div>
                        </form>
                    ) : (
                        <>
                            <div className="cal-status">
                                <span className="cal-status-dot available"></span>
                                Track your progress
                            </div>
                            <p className="cal-info-text">
                                Click on any date in the calendar to log the time you've spent coding or learning. Your data is saved locally to help you stay motivated!
                            </p>
                            <div className="cal-stats-summary">
                                <div className="stat-item">
                                    <span className="stat-value">{Object.values(loggedMinutes).reduce((a, b) => a + b, 0)}</span>
                                    <span className="stat-label">Total Minutes</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-value">{Object.keys(loggedMinutes).length}</span>
                                    <span className="stat-label">Days Tracked</span>
                                </div>
                            </div>
                        </>
                    )}

                    <div className="cal-legend">
                        <div className="cal-legend-item">
                            <span className="cal-legend-dot today-dot"></span>
                            Today
                        </div>
                        <div className="cal-legend-item">
                            <span className="cal-legend-dot activity-dot"></span>
                            Activity
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calendar;
