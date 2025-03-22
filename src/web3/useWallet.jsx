import { useAccount, useDisconnect } from 'wagmi';

export const useWallet = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const shortAddress = (addr) =>
    addr ? addr.slice(0, 6) + '...' + addr.slice(-4) : '';

  return {
    isConnected,
    address,
    shortAddress: shortAddress(address),
    disconnect,
  };
};
