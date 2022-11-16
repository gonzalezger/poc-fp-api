import { DatabaseDI } from '../utils/types/db';
import { Logger, LoggerDI } from '../utils/types/logger';

type GetAlphaDI = LoggerDI & DatabaseDI;

type GetAlphaInfo = {
  id: number;
};

export const getAlpha =
  ({ db, logger }: GetAlphaDI) =>
  async ({ id }: GetAlphaInfo) => {
    logger.info(`Service: Getting alpha with id: ${id}`);
    return db.get({ id, text: 'Hello Alpha' });
  };

export type AlphaService = {
  getAlpha: (info: GetAlphaInfo) => Promise<unknown>;
};

type AlphaServiceDI = DatabaseDI;

export const createAlphaService = (deps: AlphaServiceDI) => {
  // Sherman menciono algo acerca de que mutable stats como cache irian aca
  // Por que?

  return (logger: Logger) => ({
    getAlpha: getAlpha({ ...deps, logger }),
  });
};
