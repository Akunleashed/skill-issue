import { useGame } from "../context/GameContext";

export default function GamePage() {
  const { board, currentPlayer, winner, players, handleMove, resetGame } = useGame();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-gray-900 rounded-xl shadow-lg p-8 w-full max-w-lg flex flex-col items-center">
        <div className="flex gap-8 mb-6">
          {players.map((player, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={player.avatar}
                alt={player.name}
                className={`w-16 h-16 rounded-full ring-4 ${winner && winner.symbol === player.symbol ? 'ring-neonorange' : 'ring-gray-700'} shadow-neon-orange bg-gray-800`}
              />
              <span className="mt-2 font-semibold text-white">{player.name}</span>
              <span className={`font-bold ${currentPlayer && currentPlayer.symbol === player.symbol ? 'text-neonorange' : 'text-gray-400'}`}>
                {player.symbol}
              </span>
            </div>
          ))}
        </div>
        <div className="mb-6 text-center">
          {winner ? (
            <h2 className="text-2xl font-bold text-neonorange animate-pulse drop-shadow-[0_0_8px_#FF5F1F]">
              Winner: {winner.name}!
            </h2>
          ) : board.every(cell => cell) ? (
            <h2 className="text-2xl font-bold text-gray-200">
              It's a draw!
            </h2>
          ) : (
            <h2 className="text-xl font-bold text-neonorange">
              Current Player: <span className="text-white">{currentPlayer?.name} ({currentPlayer?.symbol})</span>
            </h2>
          )}
        </div>
        <div className="grid grid-cols-3 gap-4 bg-gray-800 rounded-xl p-4 shadow-inner">
          {board.map((cell, idx) => (
            <button
              key={idx}
              className={`w-20 h-20 flex items-center justify-center text-4xl font-extrabold border-2 rounded-lg
                border-gray-700 bg-gray-900 text-white
                hover:border-neonorange hover:shadow-[0_0_16px_2px_#FF5F1F] transition
                ${cell === 'X' ? 'text-neonorange' : cell === 'O' ? 'text-orange-300' : ''}`}
              onClick={() => handleMove(idx)}
              disabled={!!cell || !!winner}
            >
              {cell}
            </button>
          ))}
        </div>
        {(winner || board.every(cell => cell)) && (
          <button
            className="mt-8 bg-neonorange hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg shadow-neon-orange transition"
            onClick={resetGame}
          >
            Play Again
          </button>
        )}
      </div>
    </div>
  );
}
