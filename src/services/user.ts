import { User } from '../types/user';
import Service from './service';

export const UserAPI = {
  getUsers: async () => {
    const response = await Service.get<User>('/users');
    return response.data;
  },
};
