import React from 'react';
import TokenCard from './components/TokenCard';
import { tokens } from './data/tokens';

function App() {
  const handleBuy = (tokenId) => {
    alert(`Buy triggered for: ${tokenId}`);
  };

  return (
    <div className="min-h-screen w-full bg-black text-white flex justify-center items-start p-6">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-10">Pittbul Flash Wallet</h1>

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
  );
}

export default App;
