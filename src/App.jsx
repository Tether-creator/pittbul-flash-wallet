import React from 'react';
import TokenCard from './components/TokenCard';
import { tokens } from './data/tokens';

function App() {
  const handleBuy = (tokenId) => {
    alert(`Buy triggered for: ${tokenId}`);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Pittbul Flash Wallet</h1>

      <div className="w-full max-w-4xl grid gap-4 grid-cols-1 sm:grid-cols-2">
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
