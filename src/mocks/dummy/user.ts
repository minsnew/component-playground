import casual from 'casual-browserify';
import { User } from '../../types/user';

export const MockUserListData: User[] = [...Array(20)].map((_, idx) => ({
  id: idx,
  name: casual.name,
  type: casual.boolean ? 'admin' : 'user',
  phone: casual.phone,
}));
