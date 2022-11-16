const getBetaSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
  },
  required: ['id'],
} as const;

export { getBetaSchema };
