const getAlphaSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
  },
  required: ['id'],
} as const;

export { getAlphaSchema };
