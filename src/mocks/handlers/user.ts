import { rest } from 'msw'
import { generateUsers } from '../data/user'

export const userHandlers = [
  rest.get('/users', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(generateUsers()))
  }),
]
