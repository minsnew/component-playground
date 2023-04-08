import { rest } from 'msw'

export const userHandlers = [
  rest.get('/users', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({}))
  }),
]
