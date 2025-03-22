# Pittbul Flash Wallet 🐾

A Web3 token-selling wallet supporting BNB payments.

## Deploy

1. Upload code to GitHub
2. Go to https://vercel.com
3. Click **New Project**, select this repo
4. Set Build Command to: `npm run build`
5. Set Output Directory to: `dist` (or `build` if using CRA)

## Contracts

Deploy `contracts/PittbulTokenSale.sol` via [Remix](https://remix.ethereum.org)  
Set token prices using `addToken(id, address, priceUSD)`

## Security

- Token contracts are hidden via backend
- Minimum $2000 per buy (based on BNB price)
- Admin-only price controls
