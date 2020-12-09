import { Router } from 'express';

import UserAdminsController from '../controllers/userAdminsController';
// import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const userAdminsRouter = Router();

const userAdminsController = new UserAdminsController();

userAdminsRouter.post('/admin', userAdminsController.store);
// userAdminsRouter.get('/me', ensureAuthenticated, usersController.me);
// userAdminsRouter.post('/', usersController.create);

export default userAdminsRouter;
