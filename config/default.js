const { version } = require('../package.json');

module.exports = {
  server: {
    port:3000
  },
  version: version,
  line:{
    channelAccessToken:'',
    channelSecret:'',
  },
  ngrok:{
    accessToken:''
  }
};
