import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';

export default function LobbyPage() {
  const navigate = useNavigate();
  const { players } = useGame();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-gray-900 rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-neonorange text-center drop-shadow-[0_0_8px_#FF5F1F]">Game Lobby</h2>
        <div className="flex gap-8 justify-center mb-8">
          {players.map((player, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={player.avatar}
                alt={player.name}
                className="w-20 h-20 rounded-full ring-4 ring-neonorange shadow-neon-orange bg-gray-800"
              />
              <span className="mt-2 font-semibold text-white">{player.name}</span>
              <span className="text-neonorange font-bold">{player.symbol}</span>
            </div>
          ))}
        </div>
        <button
          className="w-full bg-neonorange hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg shadow-neon-orange transition"
          onClick={() => navigate('/game')}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
