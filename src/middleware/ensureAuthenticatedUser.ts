import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '../errors/AppError';
import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticatedUser(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  const { secret } = authConfig.jwt;

  try {
    const decode = verify(token, secret);

    const { sub } = decode as TokenPayload;
    const [id, is_admin] = sub.split('-');

    if (is_admin) {
      throw new AppError('Você é admin', 403);
    }

    request.user = { id };

    return next();
  } catch {
    throw new AppError('Invalid JWT token', 401);
  }
}
