/* eslint-disable prettier/prettier */
module.exports = {
  server: {
    port:{
      __name: 'SERVER_PORT',
      __format: 'json',
    },
  },
  line:{
    channelAccessToken:'LINE_CHANNEL_ACCESS_TOKEN',
    channelSecret:'LINE_CHANNEL_SECRET',
  },
  ngrok:{
    accessToken:'NGROK_ACCESS_TOKEN'
  }
};
