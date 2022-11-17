import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../../repositories/IUserRepository';
import * as CreateUserError from './CreateUserError';
import { CreateUserPrisma } from './CreateUserPrisma';
import { ICreateUserDTO } from './ICreateUserDTO';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({ username, password }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findUserByUsername(username);

    if (userAlreadyExists) {
      throw new CreateUserError.UserAlreadyExists();
    }

    const user = new CreateUserPrisma();
    const balanceInitial = 100;

    user.username = username;
    user.password = await hash(password, 8);
    user.account = {
      create: {
        balance: balanceInitial,
      },
    };

    await this.userRepository.create(user);
  }
}

export { CreateUserUseCase };
