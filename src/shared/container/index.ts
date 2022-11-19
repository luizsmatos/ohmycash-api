import { container } from 'tsyringe';

import { IUserRepository } from '@modules/users/repositories/IUserRepository';
import { UserRepository } from '@modules/users/repositories/prisma/UserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
