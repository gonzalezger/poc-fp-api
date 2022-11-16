import { FastifyBaseLogger } from 'fastify';

export type Logger = FastifyBaseLogger;

export type LoggerDI = {
  logger: Logger;
};
