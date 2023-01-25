export type UserType = 'admin' | 'user';

export interface User {
  id: number;
  name: string;
  type: UserType;
  phone: string;
}
