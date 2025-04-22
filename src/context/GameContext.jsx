import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export function GameProvider({ children }) {
  const [players, setPlayers] = useState([]);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [winner, setWinner] = useState(null);

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return players.find(p => p.symbol === squares[a]);
      }
    }
    return null;
  };

  const handleMove = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = players[currentPlayerIndex].symbol;
    const gameWinner = checkWinner(newBoard);
    setBoard(newBoard);
    setWinner(gameWinner);
    if (!gameWinner) setCurrentPlayerIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayerIndex(0);
    setWinner(null);
  };

  return (
    <GameContext.Provider value={{
      players,
      setPlayers,
      board,
      currentPlayer: players[currentPlayerIndex],
      winner,
      handleMove,
      resetGame
    }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
