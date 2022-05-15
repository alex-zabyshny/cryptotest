module.exports = {
  serverStartupOptions: {
    port: parseInt(process.env.SERVER_PORT),
  },
  databaseOptions: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
  server: {
    currenciesList: [{
      alias: 'BTC',
      availible: true,
    }, {
      alias: 'ETH',
      availible: true,
    }],
  }
}
