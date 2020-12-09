import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';
import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

class CreateUserAdminService {
  private usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  public async execute({ name, username, password }: User): Promise<User> {
    const checkIfUserNameExist = await this.usersRepository.findOne({
      username,
    });

    if (checkIfUserNameExist) {
      throw new AppError('Este username já está em uso');
    }

    const hashedPassword = await hash(password, 8);

    console.log('user creating => ', name, username, hashedPassword);

    const user = await this.usersRepository.create({
      name,
      username,
      password: hashedPassword,
      actived: true,
      is_admin: true,
    });

    return user;
  }
}

export default CreateUserAdminService;
