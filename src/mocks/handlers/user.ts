import { rest } from 'msw'
import { API_BASE_URL } from '@/common/consts/api'
import { generateUsers } from '../data/user'

export const userHandlers = [
  rest.get(`${API_BASE_URL}/users`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(generateUsers()))
  }),
]
