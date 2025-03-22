import React, { useState } from 'react';
import { tokens as defaultTokens } from '../data/tokens';

const Dashboard = () => {
  const [tokenList, setTokenList] = useState(defaultTokens);

  const handlePriceChange = (index, newPrice) => {
    const updatedTokens = [...tokenList];
    updatedTokens[index].price = newPrice;
    setTokenList(updatedTokens);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-2">Token</th>
              <th className="px-4 py-2">Symbol</th>
              <th className="px-4 py-2">Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {tokenList.map((token, index) => (
              <tr key={token.id} className="border-b border-gray-700">
                <td className="px-4 py-2">{token.name}</td>
                <td className="px-4 py-2">{token.symbol}</td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    value={token.price}
                    onChange={(e) =>
                      handlePriceChange(index, e.target.value)
                    }
                    className="bg-gray-800 text-white p-2 rounded w-24"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
