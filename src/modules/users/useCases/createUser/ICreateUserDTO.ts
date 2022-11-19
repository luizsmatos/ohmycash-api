import { z } from 'zod';

import { CreateUserSchema } from './CreateUserSchema';

type ICreateUserDTO = z.infer<typeof CreateUserSchema>;

export { ICreateUserDTO };
