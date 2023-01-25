import casual from 'casual-browserify';
import { rest } from 'msw';

export const userHandlers = [
  rest.get('/api/users', async (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ name: casual.name }));
  }),
];
