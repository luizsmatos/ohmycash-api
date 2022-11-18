import { InMemoryUserRepository } from '@modules/users/repositories/in-memory/InMemoryUserRepository';
import { AppError } from '@shared/errors/AppError';

import { CreateUserUseCase } from './CreateUserUseCase';

let createUserUseCase: CreateUserUseCase;
let inMemoryUserRepository: InMemoryUserRepository;

describe('Create User', () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUserRepository);
  });

  it('should be able to create a new user', async () => {
    const user = await createUserUseCase.execute({
      username: 'bibe@mukawe.kh',
      password: 'Bi911235',
    });

    expect(user).toHaveProperty('id');
    expect(user.username).toEqual('bibe@mukawe.kh');
  });

  it('should not be able to create a user with an existent username', async () => {
    await createUserUseCase.execute({
      username: 'bibe@mukawe.kh',
      password: 'Bi911235',
    });

    await expect(
      createUserUseCase.execute({
        username: 'bibe@mukawe.kh',
        password: 'Bi911235',
      }),
    ).rejects.toEqual(new AppError('Usuário já existe!'));
  });
});
