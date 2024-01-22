import prisma from '@/prisma';
import { genSalt, hash } from 'bcrypt';
import { Request, Response, NextFunction } from 'express';

export class AuthController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { user_name, email, password, referral_code } = req.body;
      console.log(req.body);
      const checkUser = await prisma.user.findUnique({
        where: { user_name, email },
      });

      if (checkUser) {
        throw new Error('Username or/and Email are already exist');
      }

      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);

      const newUser = await prisma.user.create({
        data: {
          user_name,
          email,
          password: hashPassword,
          referral_code,
        },
      });

      res.status(201).send(newUser);
    } catch (error: any) {
      console.log(error);
      next(error);
    }
  }
}
