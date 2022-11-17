import { Prisma, PrismaClient, User } from '@prisma/client';
import { prisma } from '@shared/infra/prisma/prismaClient';

import { IUserRepository } from '../IUserRepository';

class UserRepository implements IUserRepository {
  private readonly prismaUser: PrismaClient['user'];

  constructor() {
    this.prismaUser = prisma.user;
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = await this.prismaUser.create({ data });

    return user;
  }

  async findUserByUsername(username: string): Promise<User | null> {
    const user = await this.prismaUser.findUnique({ where: { username } });

    return user;
  }
}
export { UserRepository };
