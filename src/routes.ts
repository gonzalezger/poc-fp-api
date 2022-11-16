import { FastifyInstance } from 'fastify';
import alphaRoutes from './alpha/alpha.routes';
import betaRoutes from './beta/beta.routes';

export default (fastify: FastifyInstance, opts: any, next: any) => {
  // unprotected routes
  fastify.register(alphaRoutes, { prefix: '/alpha' });
  fastify.register(betaRoutes, { prefix: '/beta' });

  next();
};
