import User from '../models/User';

interface Query {
  id?: number | undefined;
  username?: string;
}

export default interface IUsersRepository {
  find(): Promise<User[]>;

  findOne(query: Query): Promise<User>;

  create({ name, username, password, actived, is_admin }: User): Promise<User>;
}
