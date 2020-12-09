import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import AppError from '../errors/AppError';
import authConfig from '../config/auth';
import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface Request {
  username: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}
interface Service {
  usersRepository: UsersRepository;
}

class AuthenticateUserService implements Service {
  usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  execute = async ({ username, password }: Request): Promise<Response> => {
    const user = await this.usersRepository.findOne({ username });
    if (!user) {
      throw new AppError('Username/Senha digitados estão incorretos!', 401);
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AppError('Username/Senha digitados estão incorretos!', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: `${user.id}-${user.is_admin}`,
      expiresIn,
    });

    return {
      user,
      token,
    };
  };
}

export default AuthenticateUserService;
