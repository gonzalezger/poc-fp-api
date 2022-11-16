import { FastifyInstance } from 'fastify';
import { getBetaSchema } from './schemas/get-beta.schema';

type GetBetaRequest = {
  id: number;
};

export default (fastify: FastifyInstance, _: any, next: any) => {
  fastify.get<{ Params: GetBetaRequest }>(
    '/:id',
    {
      schema: {
        params: getBetaSchema,
      },
    },
    async (req) => {
      const { id } = req.params;

      req.log.info(`Handler: Getting beta with id: ${id}`);

      return req.services.beta.getBeta({ id });
    }
  );

  next();
};
