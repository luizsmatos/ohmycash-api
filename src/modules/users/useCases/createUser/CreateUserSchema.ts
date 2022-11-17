import { z } from 'zod';

const passwordRegExp = '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$';

const CreateUserSchema = z.object({
  username: z
    .string({
      required_error: 'Usuário é obrigatório',
    })
    .min(3, { message: 'O Usuário deve ter, pelo menos, 3 caracteres.' }),
  password: z
    .string({
      required_error: 'Senha é obrigatória',
    })
    .regex(new RegExp(passwordRegExp), {
      message:
        'Senha deve ter, pelo menos, 8 caracteres, um número e uma letra maiúscula.',
    }),
});

export { CreateUserSchema };
