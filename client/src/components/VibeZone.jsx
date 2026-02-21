import { useState, useEffect, useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './VibeZone.css';

const VibeZone = () => {
    const [ref, isVisible] = useScrollAnimation();

    // --- MEMORY GAME LOGIC ---
    const zenIcons = ['🧘', '🕉️', '☸️', '☯️', '🌸', '🏮', '📿', '🎋'];
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]); // indices
    const [matchedCards, setMatchedCards] = useState([]); // icons
    const [memoryMoves, setMemoryMoves] = useState(0);

    const initializeMemoryGame = () => {
        const shuffledCards = [...zenIcons, ...zenIcons]
            .sort(() => Math.random() - 0.5)
            .map((icon, index) => ({ id: index, icon }));
        setCards(shuffledCards);
        setFlippedCards([]);
        setMatchedCards([]);
        setMemoryMoves(0);
    };

    useEffect(() => {
        initializeMemoryGame();
    }, []);

    const handleCardClick = (index) => {
        if (flippedCards.length === 2 || matchedCards.includes(cards[index].icon) || flippedCards.includes(index)) return;

        const newFlipped = [...flippedCards, index];
        setFlippedCards(newFlipped);

        if (newFlipped.length === 2) {
            setMemoryMoves(m => m + 1);
            const [first, second] = newFlipped;
            if (cards[first].icon === cards[second].icon) {
                setMatchedCards([...matchedCards, cards[first].icon]);
                setFlippedCards([]);
            } else {
                setTimeout(() => setFlippedCards([]), 1000);
            }
        }
    };

    // --- TECH SLIDING PUZZLE LOGIC ---
    const techIcons = ['⚛️', '📦', '🚀', '🛠️', '💻', '🔥', '⚡', '✨', ''];
    const [tiles, setTiles] = useState([]);
    const [puzzleMoves, setPuzzleMoves] = useState(0);
    const [isSolved, setIsSolved] = useState(false);

    const initializePuzzle = () => {
        let initialTiles = [...techIcons];
        // Shuffle
        for (let i = initialTiles.length - 2; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [initialTiles[i], initialTiles[j]] = [initialTiles[j], initialTiles[i]];
        }
        setTiles(initialTiles);
        setPuzzleMoves(0);
        setIsSolved(false);
    };

    useEffect(() => {
        initializePuzzle();
    }, []);

    const handleTileClick = (index) => {
        if (isSolved) return;

        const emptyIndex = tiles.indexOf('');
        const row = Math.floor(index / 3);
        const col = index % 3;
        const emptyRow = Math.floor(emptyIndex / 3);
        const emptyCol = emptyIndex % 3;

        const isAdjacent = (Math.abs(row - emptyRow) + Math.abs(col - emptyCol)) === 1;

        if (isAdjacent) {
            const newTiles = [...tiles];
            [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
            setTiles(newTiles);
            setPuzzleMoves(m => m + 1);

            if (newTiles.every((val, i) => val === techIcons[i])) {
                setIsSolved(true);
            }
        }
    };

    return (
        <section className="vibe-section section" id="chess">
            <div className="container">
                <div className="premium-section-header">
                    <span className="premium-badge">Internal Peace</span>
                    <h2 className="premium-section-title">Vibe Zone</h2>
                    <p className="premium-section-subtitle">
                        Find your flow. Challenge your memory or solve the technical sliding puzzle.
                    </p>
                </div>

                <div ref={ref} className={`vibe-dual-grid ${isVisible ? 'visible' : ''}`}>

                    {/* LEFT: MEMORY GAME */}
                    <div className="vibe-game-card glass-card">
                        <div className="game-card-header">
                            <h3 className="game-title">Memory Puzzle</h3>
                            <div className="game-stats">
                                <span>Moves: {memoryMoves}</span>
                                <span>Matched: {matchedCards.length}/8</span>
                            </div>
                        </div>
                        <div className="memory-grid">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`memory-card ${flippedCards.includes(index) || matchedCards.includes(card.icon) ? 'flipped' : ''}`}
                                    onClick={() => handleCardClick(index)}
                                >
                                    <div className="memory-card-inner">
                                        <div className="memory-card-front">?</div>
                                        <div className="memory-card-back">{card.icon}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="reset-btn-small" onClick={initializeMemoryGame}>Reset Puzzle</button>
                    </div>

                    {/* RIGHT: TECH SLIDING PUZZLE */}
                    <div className="vibe-game-card glass-card">
                        <div className="game-card-header">
                            <h3 className="game-title">Tech Slider</h3>
                            <div className="game-stats">
                                <span>{isSolved ? '🎉 Solved!' : `Moves: ${puzzleMoves}`}</span>
                            </div>
                        </div>
                        <div className="sliding-grid">
                            {tiles.map((tile, index) => (
                                <div
                                    key={index}
                                    className={`sliding-tile ${tile === '' ? 'empty' : ''} ${isSolved ? 'solved' : ''}`}
                                    onClick={() => handleTileClick(index)}
                                >
                                    {tile}
                                </div>
                            ))}
                        </div>
                        <button className="reset-btn-small" onClick={initializePuzzle}>Shuffle Puzzle</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VibeZone;
