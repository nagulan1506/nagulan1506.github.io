import { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './ChessGame.css';

const ChessGame = () => {
    const [ref, isVisible] = useScrollAnimation();
    const [game, setGame] = useState(new Chess());
    const [moveHistory, setMoveHistory] = useState([]);
    const [status, setStatus] = useState('Your turn');

    function makeAMove(move) {
        try {
            const result = game.move(move);
            if (result) {
                setGame(new Chess(game.fen()));
                setMoveHistory([...moveHistory, result.san]);
                return result;
            }
        } catch (e) {
            return null;
        }
        return null;
    }

    function makeRandomMove() {
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
            promotion: 'q', // always promote to queen for simplicity
        });

        if (move === null) return false;

        setStatus('Thinking...');
        setTimeout(makeRandomMove, 500);
        return true;
    }

    function updateStatus() {
        if (game.isCheckmate()) {
            setStatus(`Checkmate! ${game.turn() === 'w' ? 'Computer' : 'You'} won!`);
        } else if (game.isDraw()) {
            setStatus('Draw!');
        } else if (game.isCheck()) {
            setStatus('Check!');
        } else {
            setStatus(game.turn() === 'w' ? 'Your turn (White)' : 'Thinking...');
        }
    }

    useEffect(() => {
        updateStatus();
    }, [game]);

    function resetGame() {
        const newGame = new Chess();
        setGame(newGame);
        setMoveHistory([]);
        setStatus('Your turn');
    }

    return (
        <section className="chess-section section" id="chess">
            <div className="container">
                <div className="premium-section-header">
                    <span className="premium-badge">Technical Lab</span>
                    <h2 className="premium-section-title">Grandmaster Challenge</h2>
                    <p className="premium-section-subtitle">
                        Test your strategic thinking against my tactical script.
                        Can you beat the computer?
                    </p>
                </div>

                <div ref={ref} className={`chess-grid ${isVisible ? 'visible' : ''}`}>

                    {/* Board Side */}
                    <div className="chess-board-container glass-card">
                        <div className="status-banner">
                            <span className={`status-dot ${status.includes('Think') ? 'thinking' : ''}`}></span>
                            {status}
                        </div>
                        <div className="board-wrapper">
                            <Chessboard
                                position={game.fen()}
                                onPieceDrop={onDrop}
                                boardOrientation="white"
                                customDarkSquareStyle={{ backgroundColor: '#6366F1' }}
                                customLightSquareStyle={{ backgroundColor: '#F9FAFB' }}
                            />
                        </div>
                    </div>

                    {/* Stats Side */}
                    <div className="chess-controls">
                        <div className="chess-stats-card glass-card">
                            <h3>Match Analysis</h3>
                            <div className="move-history">
                                <h4>Move History</h4>
                                <div className="moves-list">
                                    {moveHistory.length > 0 ? (
                                        moveHistory.map((move, i) => (
                                            <span key={i} className="move-tag">
                                                {i % 2 === 0 ? `${Math.floor(i / 2) + 1}.` : ''} {move}
                                            </span>
                                        ))
                                    ) : (
                                        <p className="empty-moves">No moves yet. Start the hunt.</p>
                                    )}
                                </div>
                            </div>

                            <div className="game-status-info">
                                <div className={`game-badge ${game.turn() === 'w' ? 'white' : 'black'}`}>
                                    {game.turn() === 'w' ? 'White to move' : 'Black Thinking...'}
                                </div>
                            </div>

                            <button className="reset-btn" onClick={resetGame}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M23 4v6h-6"></path>
                                    <path d="M1 20v-6h6"></path>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                </svg>
                                Restart Match
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ChessGame;
