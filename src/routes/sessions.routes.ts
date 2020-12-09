import { Router } from 'express';

import SessionsController from '../controllers/sessionsController';

const sessionsRouter = Router();

const sessionsController = new SessionsController();

sessionsRouter.post('/admin', sessionsController.createAdmin);
sessionsRouter.post('/user', sessionsController.createUser);

export default sessionsRouter;
