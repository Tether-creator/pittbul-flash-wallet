import React from 'react';
import TokenCard from './components/TokenCard';
import { tokens } from './data/tokens';

function App() {
  const handleBuy = (tokenId) => {
    alert(`Buy triggered for: ${tokenId}`);
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <h1 className="text-3xl text-white font-bold mb-6">Pittbul Flash Wallet</h1>
      <div className="grid md:grid-cols-2 gap-4">
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
  );
}

export default App;
