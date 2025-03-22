import React from 'react';
import { useWallet } from '../web3/useWallet';

const Navbar = () => {
  const { isConnected, shortAddress, disconnect } = useWallet();

  return (
    <nav className="w-full flex items-center justify-between bg-gray-900 px-6 py-4 shadow-md">
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="Pittbul Logo"
          className="h-10 w-10 rounded-full border-2 border-red-600"
        />
        <h1 className="text-white text-2xl font-bold">Pittbul Flash Wallet</h1>
      </div>

      {isConnected ? (
        <div className="flex items-center gap-3">
          <span className="text-sm text-white bg-gray-700 px-3 py-1 rounded">
            {shortAddress}
          </span>
          <button
            onClick={disconnect}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <w3m-button />
      )}
    </nav>
  );
};

export default Navbar;
