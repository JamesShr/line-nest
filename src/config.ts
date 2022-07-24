import config from 'config';

// version
export const INFO_VERSION = config.get('version') as string;

// server
export const SERVER_PORT = config.get('server.port') as number;

// line
export const LINE_CHANNEL_ACCESS_TOKEN = config.get('line.channelAccessToken') as string;
export const LINE_CHANNEL_SECRET = config.get('line.channelSecret') as string;

// ngrok
export const NGROK_ACCESS_TOKEN = config.get('ngrok.accessToken') as string;
