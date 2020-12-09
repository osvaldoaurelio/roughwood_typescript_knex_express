import { Request as Req, Response as Res } from 'express';

import usersSerializer from '../serializers/usersSerializer';
import AuthenticateAdminService from '../services/AuthenticateAdminService';
import AuthenticateUserService from '../services/AuthenticateUserService';

class SessionsController {
  public async createUser(req: Req, res: Res): Promise<Res> {
    const { username, password } = req.body.session;
    const authenticateUser = new AuthenticateUserService();
    const { user, token } = await authenticateUser.execute({
      username,
      password,
    });
    return res.json({ user: usersSerializer.render(user), token });
  }

  public async createAdmin(req: Req, res: Res): Promise<Res> {
    const { username, password } = req.body.session;
    console.log(username, password);
    const authenticateAdmin = new AuthenticateAdminService();
    const { user, token } = await authenticateAdmin.execute({
      username,
      password,
    });
    return res.json({ user: usersSerializer.render(user), token });
  }
}

export default SessionsController;
