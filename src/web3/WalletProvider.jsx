import React from 'react';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { bsc } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { Web3Modal } from '@web3modal/react';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';

const projectId = '7ced37b5788caedc29349277d55c225e'; 

const { chains, publicClient } = configureChains(
  [bsc],
  [w3mProvider({ projectId }), publicProvider()]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: '1', chains }),
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

export const WalletProvider = ({ children }) => (
  <>
    <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
    <Web3Modal
      projectId={projectId}
      ethereumClient={ethereumClient}
      themeMode="dark"
      themeColor="red"
      defaultChain={bsc}
    />
  </>
);
