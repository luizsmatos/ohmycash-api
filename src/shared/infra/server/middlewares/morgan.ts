import morgan, { StreamOptions } from 'morgan';

import { Logger } from '@shared/infra/logging/logger';

const stream: StreamOptions = Object.freeze({
  write: (message: string) => Logger.http(message),
});

const skip = () => {
  const env = process.env.NODE_ENV || 'development';

  return env !== 'development';
};

const morganMiddleware = morgan(
  ':remote-addr :method :url :status :res[content-length] - :response-time ms',
  { stream, skip },
);

export { morganMiddleware };
