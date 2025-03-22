import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TokenCard from './components/TokenCard';
import Navbar from './components/Navbar';
import { tokens } from './data/tokens';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  const handleBuy = (tokenId) => {
    alert(`Buy triggered for token: ${tokenId}`);
  };

  const handleConnectWallet = () => {
    alert('Connect Wallet clicked (to be connected to Web3 later)');
  };

  return (
    <Router>
      <Routes>
        {/* Front Page with Wallet */}
        <Route
          path="/"
          element={
            <div className="min-h-screen w-full bg-black text-white">
              <Navbar onConnect={handleConnectWallet} />
              <div className="flex justify-center items-start p-6">
                <div className="w-full max-w-5xl mx-auto">
                  <h1 className="text-3xl font-bold text-center mb-10">
                    Available Tokens
                  </h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {tokens.map((token) => (
                      <TokenCard
                        key={token.id}
                        name={token.name}
                        symbol={token.symbol}
                        price={token.price}
                        onBuy={() => handleBuy(token.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          }
        />

        {/* Admin Login */}
        <Route path="/admin" element={<Login />} />

        {/* Admin Dashboard (Protected) */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
