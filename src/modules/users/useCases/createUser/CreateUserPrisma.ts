import { Prisma } from '@prisma/client';

class CreateUserPrisma implements Prisma.UserCreateInput {
  username!: string;

  password!: string;

  createdAt?: string | Date;

  updatedAt?: string | Date;

  account!: Prisma.AccountCreateNestedOneWithoutUsersInput;
}

export { CreateUserPrisma };
