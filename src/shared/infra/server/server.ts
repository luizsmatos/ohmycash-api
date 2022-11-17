import http from 'http';

import { apiConfig } from '@config/index';

import { app } from './app';

const server = http.createServer(app);

server.listen(apiConfig.port, () => {
  console.log(`Server listening on port ${apiConfig.port}`);
});
