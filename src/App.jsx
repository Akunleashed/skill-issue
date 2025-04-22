import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import LoginPage from './components/LoginPage';
import LobbyPage from './components/LobbyPage';
import GamePage from './components/GamePage';

export default function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/lobby" element={<LobbyPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}
