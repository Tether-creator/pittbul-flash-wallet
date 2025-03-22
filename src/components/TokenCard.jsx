import React from 'react';

const TokenCard = ({ name, symbol, price, onBuy }) => {
  return (
    <div className="flex justify-between items-center bg-gray-900 hover:bg-gray-800 p-4 rounded-lg shadow-md w-full">
      <div>
        <h2 className="text-white font-bold">{name}</h2>
        <p className="text-sm text-gray-400">{symbol}</p>
        <input
          type="text"
          defaultValue={price}
          className="bg-gray-700 text-white px-2 py-1 rounded mt-2 w-28"
          readOnly
        />
      </div>
      <button
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        onClick={onBuy}
      >
        Buy
      </button>
    </div>
  );
};

export default TokenCard;
