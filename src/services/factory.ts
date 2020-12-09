import UsersRepository from '../repositories/UsersRepository';

import AuthenticateUserService from './AuthenticateUserService';

export class UserServiceFactory {
  static AuthenticationUserService() {
    return new AuthenticateUserService({
      usersRepository: new UsersRepository(),
    });
  }
}
