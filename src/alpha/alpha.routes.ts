import { FastifyInstance } from 'fastify';
import { getAlphaSchema } from './schemas/get-alpha.schema';

type GetAlphaRequest = {
  id: number;
};

export default (fastify: FastifyInstance, _: any, next: any) => {
  fastify.get<{ Params: GetAlphaRequest }>(
    '/:id',
    {
      schema: {
        params: getAlphaSchema,
      },
    },
    async (req) => {
      const { id } = req.params;

      req.log.info(`Handler: Getting alpha with id: ${id}`);

      return req.services.alpha.getAlpha({ id });
    }
  );

  next();
};
