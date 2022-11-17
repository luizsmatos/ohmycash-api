import { AppError } from '@shared/errors/AppError';

export class UserAlreadyExists extends AppError {
  constructor() {
    super('Usuário já existe!');
  }
}
