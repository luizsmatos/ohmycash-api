import http from 'http';

import { apiConfig } from '@config/index';

import { Logger } from '../logging/logger';
import { app } from './app';

const server = http.createServer(app);

server.listen(apiConfig.port, () => {
  Logger.info(`Server listening on port ${apiConfig.port}`);
});
