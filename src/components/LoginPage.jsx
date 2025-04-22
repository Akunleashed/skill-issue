import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { setPlayers } = useGame();
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const avatarAPI = 'https://api.dicebear.com/7.x/bottts/svg?seed=';
    setPlayers([
      {
        name: player1,
        avatar: `${avatarAPI}${player1}`,
        symbol: 'X'
      },
      {
        name: player2,
        avatar: `${avatarAPI}${player2}`,
        symbol: 'O'
      }
    ]);
    navigate('/lobby');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-gray-900 rounded-xl shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-neonorange text-center drop-shadow-[0_0_8px_#FF5F1F]">Tic Tac Toe Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:ring-2 focus:ring-neonorange border-none placeholder-gray-400"
            placeholder="Player 1 Name"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
            required
          />
          <input
            className="w-full p-3 mb-6 rounded bg-gray-800 text-white focus:ring-2 focus:ring-neonorange border-none placeholder-gray-400"
            placeholder="Player 2 Name"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
          />
          <button
            className="w-full bg-neonorange hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow-neon-orange transition"
            type="submit"
          >
            Enter Lobby
          </button>
        </form>
      </div>
    </div>
  );
}
