import http from 'http';

import { apiConfig } from '@config/index';
import { createTerminus } from '@godaddy/terminus';
import { Logger } from '@shared/infra/logging/logger';

import { app } from './app';

const server = http.createServer(app);

const onSignal = () => {
  Logger.info('server is starting cleanup');
  return Promise.resolve();
};

const onShutdown = () => {
  Logger.info('cleanup finished, server is shutting down');
  return Promise.resolve();
};

const onHealthCheck = () => {
  return Promise.resolve('UP');
};

const terminusConfiguration = Object.freeze({
  logger: Logger.info,
  signal: 'SIGINT',
  healthChecks: {
    '/healthcheck': onHealthCheck,
  },
  onSignal,
  onShutdown,
});

createTerminus(server, terminusConfiguration);

server.listen(apiConfig.port, () =>
  Logger.debug(`Magic happens on port ${apiConfig.port}`),
);
