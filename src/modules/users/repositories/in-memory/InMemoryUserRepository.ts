import { Prisma, User } from '@prisma/client';

import { IUserRepository } from '../IUserRepository';

class InMemoryUserRepository implements IUserRepository {
  private users: User[] = [];

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user: User = {
      id: 1,
      username: data.username,
      password: data.password,
      accountId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(user);

    return user;
  }

  async findUserByUsername(username: string): Promise<User | null> {
    const user = this.users.find((usr) => usr.username === username);

    return user || null;
  }
}

export { InMemoryUserRepository };
