import { Router } from 'express';

import { CreateUserController } from '@modules/users/useCases/createUser/CreateUserController';
import { CreateUserSchema } from '@modules/users/useCases/createUser/CreateUserSchema';

import { validatePayload } from '../middlewares/validatePayload';

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post(
  '/registration',
  validatePayload(CreateUserSchema),
  createUserController.handle,
);

export { usersRoutes };
