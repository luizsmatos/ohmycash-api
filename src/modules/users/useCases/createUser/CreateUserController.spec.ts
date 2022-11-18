import { StatusCodes } from 'http-status-codes';
import request from 'supertest';

import { prisma } from '@shared/infra/prisma/prismaClient';
import { app } from '@shared/infra/server/app';

describe('Create User Controller', () => {
  afterAll(async () => {
    const deleteUsers = prisma.user.deleteMany();
    const deleteAccounts = prisma.account.deleteMany();

    await prisma.$transaction([deleteUsers, deleteAccounts]);
    await prisma.$disconnect();
  });

  it('should be able to create a new user', async () => {
    const response = await request(app).post('/api/users/registration').send({
      username: 'pugsi@gide',
      password: 'Pugsi1@gide',
    });

    expect(response.status).toEqual(StatusCodes.CREATED);
  });

  it('should not be able to create a new user with invalid username', async () => {
    const response = await request(app).post('/api/users/registration').send({
      username: 'pu',
      password: 'Pugsi1@gide',
    });

    expect(response.status).toEqual(StatusCodes.UNPROCESSABLE_ENTITY);
    expect(response.body).toHaveProperty(
      'message',
      'O Usuário deve ter, pelo menos, 3 caracteres.',
    );
  });

  it('should not be able to create a new user with invalid password', async () => {
    const response = await request(app).post('/api/users/registration').send({
      username: 'pugsi@gide',
      password: 'pugsi@gide',
    });

    expect(response.status).toEqual(StatusCodes.UNPROCESSABLE_ENTITY);
    expect(response.body).toHaveProperty(
      'message',
      'Senha deve ter, pelo menos, 8 caracteres, um número e uma letra maiúscula.',
    );
  });

  it('should not be able to create a user with an existing username', async () => {
    await request(app).post('/api/users/registration').send({
      username: 'pugsi@gide',
      password: 'Pugsi1@gide',
    });

    const response = await request(app).post('/api/users/registration').send({
      username: 'pugsi@gide',
      password: 'Pugsi1@gide',
    });

    expect(response.status).toEqual(StatusCodes.CONFLICT);
    expect(response.body).toHaveProperty('message');
  });
});
