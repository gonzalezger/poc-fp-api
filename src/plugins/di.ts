import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { AlphaService, createAlphaService } from '../alpha/alpha.service';
import { BetaService, createBetaService } from '../beta/beta.service';
import { DatabaseDI, fakeDb } from '../utils/types/db';
import { Logger } from '../utils/types/logger';

declare module 'fastify' {
  interface FastifyRequest {
    services: Services;
  }
}

export type Services = {
  alpha: AlphaService;
  beta: BetaService;
};

type CreateServicesDI = DatabaseDI;

const createServices = (deps: CreateServicesDI) => {
  const services = {
    alpha: createAlphaService(deps),
    beta: createBetaService(deps),
  };

  return (logger: Logger): Services => ({
    alpha: services.alpha(logger),
    beta: services.beta(logger),
  });
};

const diPlugin = (fastify: FastifyInstance, _: any, next: any) => {
  const services = createServices({ db: fakeDb });

  fastify.addHook('onRequest', (req, _, done) => {
    req.services = services(req.log);

    done();
  });

  next();
};

export default fp(diPlugin);
