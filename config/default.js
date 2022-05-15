module.exports = {
  serverStartupOptions: {
    port: parseInt(process.env.SERVER_PORT) || 3000,
  },
  databaseOptions: {
    connectionUrl: process.env.DB_CONNECTION_URL,
  },
  server: {
    currenciesList: [{
      alias: 'BTC',
      availible: true,
    }, {
      alias: 'ETH',
      availible: true,
    }],
    coinApi: {
      key: process.env.COIN_API_KEY,
      baseUrl: 'https://rest.coinapi.io',
    },
    ratesCheckInterval: 30, // Seconds
  },
}
