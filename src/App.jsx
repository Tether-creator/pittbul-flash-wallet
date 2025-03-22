import React from 'react';
import TokenCard from './components/TokenCard';
import { tokens } from './data/tokens';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  const handleBuy = (tokenId) => {
    alert(`Buy triggered for token: ${tokenId}`);
  };

  return (
    <Router>
      <Routes>
        {/* Public Wallet Route */}
        <Route
          path="/"
          element={
            <div className="min-h-screen w-full bg-black text-white flex justify-center items-start p-6">
              <div className="w-full max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-10">
                  Pittbul Flash Wallet
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
