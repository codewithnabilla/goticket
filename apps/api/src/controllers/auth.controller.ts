import prisma from '@/prisma';
import { compare, genSalt, hash } from 'bcrypt';
import { Request, Response, NextFunction } from 'express';
import { sign } from 'jsonwebtoken';

export class AuthController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      //check existing user
      const checkUser = await prisma.user.findUnique({
        where: { email: req.body.email },
      });

      if (checkUser) {
        throw new Error('Email is already exist');
      }

      //register user
      const { username, email, password, referral_code } = req.body;
      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);

      const newUser = await prisma.user.create({
        data: {
          username,
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

  async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const loginUser = await prisma.user.findUnique({
        where: { email: req.body.email },
      });
      if (!loginUser) {
        throw new Error('Invalid email or password');
      }
      const jwtToken = sign(
        { id: loginUser.id, role: loginUser.role, email: loginUser.email },
        'goticket123',
      );
      const isValidPassword = await compare(
        req.body.password,
        loginUser.password,
      );
      if (!isValidPassword) {
        throw new Error('Invalid passowrd');
      }
      return res.status(200).send({
        username: loginUser.username,
        email: loginUser.email,
        token: jwtToken,
      });
    } catch (error: any) {
      console.log(error);
      return res.status(500).send('Invalid email or password');
    }
  }
}
