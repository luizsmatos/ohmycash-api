import { Prisma, User } from '@prisma/client';

interface IUserRepository {
  create(data: Prisma.UserCreateInput): Promise<User>;
  findUserByUsername(username: string): Promise<User | null>;
}

export { IUserRepository };
