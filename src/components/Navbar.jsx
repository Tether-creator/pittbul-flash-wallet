import React from 'react';

const Navbar = ({ onConnect }) => {
  return (
    <nav className="w-full flex items-center justify-between bg-gray-900 px-6 py-4 shadow">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Pittbul Logo" className="h-10 w-10 rounded-full" />
        <h1 className="text-white text-xl font-bold">Pittbul Flash Wallet</h1>
      </div>
      <button
        onClick={onConnect}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
      >
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
