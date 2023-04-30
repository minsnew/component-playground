import { rest } from 'msw'
import { API_BASE_URL } from '@/common/consts/api'
import { generateImages } from '../data/image'

export const imageHandlers = [
  rest.get(`${API_BASE_URL}/images`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(generateImages()))
  }),
]
