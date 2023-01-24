import { rest } from 'msw';

export const handlers = [
  rest.get('/test', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ name: 'test' }));
  }),
];
