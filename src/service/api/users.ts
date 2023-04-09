import { User } from '@/common/models/user'
import Service from '..'

export const UserAPI = {
  getUsers: async () => {
    const response = await Service.get<User[]>('/users')
    return response
  },
}
