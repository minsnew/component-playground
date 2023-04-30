import { imageHandlers } from './image'
import { userHandlers } from './user'

const handlers = [...userHandlers, ...imageHandlers]
export default handlers
