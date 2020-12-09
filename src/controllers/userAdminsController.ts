import { Request, Response } from 'express';

import userSerializer from '../serializers/usersSerializer';
// import UsersRepository from '../repositories/UsersRepository';
import CreateUserAdminService from '../services/CreateUserAdminService';
import User from '../models/User';

class UserAdminsController {
  // public async index(request: Request, response: Response): Promise<Response> {
  //   const users = await usersRepository.find();

  //   return response.json({ users });
  // }

  // public async me(request: Request, response: Response): Promise<Response> {
  //   const { id } = request.user;

  //   const usersRepository = getRepository(User);
  //   const user = await usersRepository.findOneOrFail(id, {
  //     relations: ['feedback_senders', 'feedback_receivers'],
  //   });

  //   return response.json({ user: userSerializer.render(user) });
  // }

  public async store(request: Request, response: Response): Promise<Response> {
    const { name, username, password } = request.body.user as User;

    const createUserAdmin = new CreateUserAdminService();
    const user = await createUserAdmin.execute({ name, username, password });

    return response.json({ user: userSerializer.render(user) });
  }
}

export default UserAdminsController;
