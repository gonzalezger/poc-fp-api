import { DatabaseDI } from '../utils/types/db';
import { Logger, LoggerDI } from '../utils/types/logger';

type GetBetaDI = LoggerDI & DatabaseDI;

type GetBetaInfo = {
  id: number;
};

export const getBeta =
  ({ db, logger }: GetBetaDI) =>
  async ({ id }: GetBetaInfo) => {
    logger.info(`Getting beta with id: ${id}`);
    return db.get({ id, text: 'Hello Beta' });
  };

export type BetaService = {
  getBeta: (info: GetBetaInfo) => Promise<unknown>;
};

type BetaServiceDI = DatabaseDI;

export const createBetaService = (deps: BetaServiceDI) => {
  // Sherman menciono algo acerca de que mutable stats como cache irian aca
  // Por que?

  return (logger: Logger) => ({
    getBeta: getBeta({ ...deps, logger }),
  });
};
