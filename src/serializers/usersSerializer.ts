import User from '../models/User';

interface UsersSerializer {
  id?: number;
  name: string;
  username: string;
  actived: boolean;
  is_admin: boolean;
  created_at: Date;
  updated_at: Date;
}

export default {
  render(user: User): UsersSerializer {
    const {
      id,
      name,
      username,
      actived,
      is_admin,
      created_at,
      updated_at,
    } = user;
    return {
      id,
      name,
      username,
      actived,
      is_admin,
      created_at,
      updated_at,
    };
  },
  renderMany(users: User[]): UsersSerializer[] {
    return users?.map(user => this.render(user));
  },
};
