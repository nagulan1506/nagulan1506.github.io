import { useState, useEffect, useRef } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './ChessGame.css';

const ChessGame = () => {
    const [ref, isVisible] = useScrollAnimation();

    // --- CHESS LOGIC ---
    const gameRef = useRef(new Chess());
    const [fen, setFen] = useState(gameRef.current.fen());
    const [moveHistory, setMoveHistory] = useState([]);
    const [status, setStatus] = useState('Your turn');

    function makeAMove(move) {
        try {
            const game = gameRef.current;
            const result = game.move(move);
            if (result) {
                setFen(game.fen());
                setMoveHistory(prev => [...prev, result.san]);
                return result;
            }
        } catch (e) {
            console.error("Move error:", e);
            return null;
        }
        return null;
    }

    function makeRandomMove() {
        const game = gameRef.current;
        const possibleMoves = game.moves();
        if (game.isGameOver() || game.isDraw() || possibleMoves.length === 0) {
            updateStatus();
            return;
        }
        const randomIndex = Math.floor(Math.random() * possibleMoves.length);
        makeAMove(possibleMoves[randomIndex]);
    }

    function onDrop(sourceSquare, targetSquare) {
        const move = makeAMove({
            from: sourceSquare,
            to: targetSquare,
            promotion: 'q',
        });

        if (move === null) return false;

        setStatus('Thinking...');
        setTimeout(makeRandomMove, 500);
        return true;
    }

    function updateStatus() {
        const game = gameRef.current;
        if (game.isCheckmate()) {
            setStatus(`Checkmate! ${game.turn() === 'w' ? 'Computer' : 'You'} won!`);
        } else if (game.isDraw()) {
            setStatus('Draw!');
        } else if (game.isCheck()) {
            setStatus('Check!');
        } else {
            setStatus(game.turn() === 'w' ? 'Your turn' : 'Thinking...');
        }
    }

    useEffect(() => {
        updateStatus();
    }, [fen]);

    function resetGame() {
        gameRef.current = new Chess();
        setFen(gameRef.current.fen());
        setMoveHistory([]);
        setStatus('Your turn');
    }

    // --- MEMORY GAME LOGIC ---
    const zenIcons = ['🧘', '🕉️', '☸️', '☯️', '🌸', '🏮', '📿', '🎋'];
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]); // indices
    const [matchedCards, setMatchedCards] = useState([]); // icons
    const [moves, setMoves] = useState(0);

    const initializeMemoryGame = () => {
        const shuffledCards = [...zenIcons, ...zenIcons]
            .sort(() => Math.random() - 0.5)
            .map((icon, index) => ({ id: index, icon, isFlipped: false }));
        setCards(shuffledCards);
        setFlippedCards([]);
        setMatchedCards([]);
        setMoves(0);
    };

    useEffect(() => {
        initializeMemoryGame();
    }, []);

    const handleCardClick = (index) => {
        if (flippedCards.length === 2 || matchedCards.includes(cards[index].icon) || flippedCards.includes(index)) return;

        const newFlipped = [...flippedCards, index];
        setFlippedCards(newFlipped);

        if (newFlipped.length === 2) {
            setMoves(m => m + 1);
            const [first, second] = newFlipped;
            if (cards[first].icon === cards[second].icon) {
                setMatchedCards([...matchedCards, cards[first].icon]);
                setFlippedCards([]);
            } else {
                setTimeout(() => setFlippedCards([]), 1000);
            }
        }
    };

    return (
        <section className="chess-section section" id="chess">
            <div className="container">
                <div className="premium-section-header">
                    <span className="premium-badge">Zen Corner</span>
                    <h2 className="premium-section-title">Vibe - Stress free</h2>
                    <p className="premium-section-subtitle">
                        Find your flow. Solve a memory puzzle or challenge the AI to a mindful match of Chess.
                    </p>
                </div>

                <div ref={ref} className={`vibe-dual-grid ${isVisible ? 'visible' : ''}`}>

                    {/* LEFT: MEMORY GAME */}
                    <div className="memory-game-container glass-card">
                        <div className="memory-game-header">
                            <h3 className="game-title">Memory Puzzle</h3>
                            <div className="game-stats">
                                <span>Moves: {moves}</span>
                                <span>Matched: {matchedCards.length}/8</span>
                            </div>
                        </div>
                        <div className="memory-grid">
                            {cards.map((card, index) => (
                                <div
                                    key={card.id}
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

                    {/* RIGHT: CHESS GAME */}
                    <div className="chess-board-container glass-card shadow-premium">
                        <div className="status-banner">
                            <span className={`status-dot ${status.includes('Think') ? 'thinking' : ''}`}></span>
                            {status}
                        </div>
                        <div className="board-wrapper-medium">
                            <Chessboard
                                position={game.fen()}
                                onPieceDrop={onDrop}
                                boardWidth={320}
                                boardOrientation="white"
                                customDarkSquareStyle={{ backgroundColor: 'rgba(19, 78, 94, 0.4)' }}
                                customLightSquareStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                            />
                        </div>
                        <div className="chess-actions-row">
                            <button className="reset-btn-small" onClick={resetGame}>New Game</button>
                            <div className="move-history-compact">
                                {moveHistory.length > 0 ? `Last: ${moveHistory[moveHistory.length - 1]}` : 'Empty board'}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ChessGame;
