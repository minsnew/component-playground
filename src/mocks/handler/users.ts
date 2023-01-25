import { rest } from 'msw';
import { MockUserListData } from '../dummy/user';

export const userHandlers = [
  rest.get('/api/users', async (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(MockUserListData));
  }),
];
