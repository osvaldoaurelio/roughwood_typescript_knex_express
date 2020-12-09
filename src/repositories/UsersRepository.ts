import knex from '../database';
import User from '../models/User';
import IUsersRepository from './IUsersRepository';

interface Query {
  id?: number | undefined;
  username?: string;
}

export default class UsersRepository implements IUsersRepository {
  public async find(): Promise<User[]> {
    const users = await knex('users').where({ is_admin: false });
    return users;
  }

  public async findOne(query: Query): Promise<User> {
    const [user] = (await knex('users').where(query).limit(1)) as User[];
    console.log('user', user);
    return user;
  }

  public async create({
    name,
    username,
    password,
    actived = false,
    is_admin = false,
  }: any): Promise<User> {
    const [user] = await knex('users').insert({
      name,
      username,
      password,
      actived,
      is_admin,
    });
    console.log('user', user);
    return this.findOne({ id: user });
  }
}
