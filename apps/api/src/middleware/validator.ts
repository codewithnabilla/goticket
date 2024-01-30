import { Request, Response, NextFunction } from 'express';

import { body, validationResult } from 'express-validator';

export const regisValidation = [
  body('username').notEmpty().withMessage('Username can not be empty'),
  body('email').notEmpty().withMessage('Email  can not be empty'),
  body('email').isEmail().withMessage('Email format is not suitable'),
  body('password').notEmpty().withMessage('Password  can not be empty'),
  body('password')
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minNumbers: 0,
      minSymbols: 1,
      minUppercase: 1,
    })
    .withMessage(
      'Password must contain min 8 letters, with min 1 lowercase, 1 uppercase, and 1 symbol',
    ),
  (req: Request, res: Response, next: NextFunction) => {
    const errorValidator = validationResult(req); 
    if (!errorValidator.isEmpty()) {
     
      return res.status(400).send({ error: errorValidator.array() });
    }
    next(); // 
  },
];