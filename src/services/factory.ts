import UsersRepository from '../repositories/UsersRepository';

import AuthenticateUserService from './AuthenticateUserService';

export class UserServiceFactory {
  static AuthenticationUserService(): AuthenticateUserService {
    return new AuthenticateUserService({
      usersRepository: new UsersRepository(),
    });
  }
}
