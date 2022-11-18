import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ZodSchema } from 'zod';

import { AppError } from '@shared/errors/AppError';

function validatePayload(schema: ZodSchema) {
  return (request: Request, _response: Response, next: NextFunction): void | Response => {
    const { body } = request;

    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      throw new AppError(
        parsed.error.errors[0].message,
        StatusCodes.UNPROCESSABLE_ENTITY,
      );
    }

    return next();
  };
}

export { validatePayload };
