import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import AppError from '../errors/AppError';
import authConfig from '../config/auth';
import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';
import IUsersRepository from '../repositories/IUsersRepository';

interface Request {
  username: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  usersRepository: UsersRepository;

  constructor({ usersRepository }: any) {
    this.usersRepository = usersRepository;
  }

  public async execute({ username, password }: Request): Promise<Response> {
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
  }
}

export default AuthenticateUserService;
