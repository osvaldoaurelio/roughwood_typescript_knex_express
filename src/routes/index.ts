import { Router } from 'express';

import sessionsRouter from './sessions.routes';
import userAdminsRouter from './userAdmins.routes';

const router = Router();

router.use('/sessions', sessionsRouter);
router.use('/users', userAdminsRouter);

export default router;
