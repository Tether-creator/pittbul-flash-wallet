export default function handler(req, res) {
  const tokens = [
    { id: 'wbtc1', name: 'Wrapped BTC', symbol: 'WBTC', price: '$0.00' },
    { id: 'btcbr', name: 'Bitcoin BR', symbol: 'BTCBR', price: '$0.00' },
    { id: 'usdt1', name: 'Tether', symbol: 'USDT', price: '$0.00' },
    { id: 'ethbsc', name: 'ETHBSC', symbol: 'ETHBSC', price: '$0.00' },
    // Add the rest...
  ];
  res.status(200).json(tokens);
}
