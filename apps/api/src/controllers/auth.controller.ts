import prisma from '@/prisma';
import { compare, genSalt, hash } from 'bcrypt';
import { Request, Response, NextFunction } from 'express';
import { sign } from 'jsonwebtoken';
// import { nanoid } from 'nanoid';

export class AuthController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, email, password } = req.body;

      //check existing user
      const checkUser = await prisma.user.findUnique({
        where: { email: req.body.email },
      });

      if (checkUser) {
        throw new Error('Email is already exist');
      }

      //referral number
      function generateRandomCode(
        email: string,
        username: string,
        length: number,
      ): string {
        const combinedCode = email + username;

        let randomCode = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * combinedCode.length);
          randomCode += combinedCode.charAt(randomIndex);
        }
        return randomCode;
      }
      const referralCode = generateRandomCode(email, username, 7);

      // existing refferal code
      if (req.body.referral_code) {
        const existingReferral = await prisma.user.findFirst({
          where: { referral_code: req.body.referral_code },
        });
        if (!existingReferral) {
          throw new Error('referral code is invalid');
        }
      }

      //expiration date
      const now = new Date();
      const expirationDate = new Date(now);
      expirationDate.setDate(now.getDate() + 90);

      //register user
      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);

      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password: hashPassword,
          referral_code: referralCode,
        },
      });

      if (req.body.referral_code) {
        const existingReferral = await prisma.user.findFirst({
          where: { referral_code: req.body.referral_code },
        });
        if (existingReferral) {
          await prisma.referralPoint.create({
            data: {
              referrer_id: existingReferral.id,
              referred_id: newUser.id,
              expiration_date: expirationDate,
            },
          });
        }
      }

      if (req.body.referral_code) {
        const existingReferred = await prisma.user.findUnique({
          where: { id: newUser.id },
        });
        if (existingReferred) {
          await prisma.coupons.create({
            data: {
              name: 'coupon referral',
              usage_limit: 1,
              expiration_date: expirationDate,
              discount_amount: 1000,
            },
          });
        }
      }

      return res.status(201).send({ success: true, result: newUser });
    } catch (error: any) {
      console.log(error);
      next(error);
    }
  }

  async registerOrganizer(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, email, password } = req.body;

      // Check existing user
      const checkUser = await prisma.user.findUnique({
        where: { email: req.body.email },
      });

      if (checkUser) {
        throw new Error('Email is already exist');
      }

      // Referral number
      function generateRandomCode(
        email: string,
        username: string,
        length: number,
      ): string {
        const combinedCode = email + username;

        let randomCode = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * combinedCode.length);
          randomCode += combinedCode.charAt(randomIndex);
        }
        return randomCode;
      }
      const referralCode = generateRandomCode(email, username, 7);

      // Existing referral code
      if (req.body.referral_code) {
        const existingReferral = await prisma.user.findFirst({
          where: { referral_code: req.body.referral_code },
        });
        if (!existingReferral) {
          throw new Error('Referral code is invalid');
        }
      }

      // Expiration date
      const now = new Date();
      const expirationDate = new Date(now);
      expirationDate.setDate(now.getDate() + 90);

      // Register user
      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);

      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password: hashPassword,
          referral_code: referralCode,
          role: 'organizer',
        },
      });

      // Create referral points and coupons for the referrer
      if (req.body.referral_code) {
        const existingReferral = await prisma.user.findFirst({
          where: { referral_code: req.body.referral_code },
        });
        if (existingReferral) {
          await prisma.referralPoint.create({
            data: {
              referrer_id: existingReferral.id,
              referred_id: newUser.id,
              expiration_date: expirationDate,
            },
          });

          await prisma.coupons.create({
            data: {
              name: 'coupon referral',
              usage_limit: 1,
              expiration_date: expirationDate,
              discount_amount: 1000,
            },
          });
        }
      }

      return res.status(201).send({ success: true, result: newUser });
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

  async loginOrganizer(req: Request, res: Response, next: NextFunction) {
    try {
      const loginOrganizer = await prisma.user.findUnique({
        where: { email: req.body.email },
      });
      if (!loginOrganizer) {
        throw new Error('Invalid email or password');
      }
      const jwtToken = sign(
        {
          id: loginOrganizer.id,
          role: loginOrganizer.role,
          email: loginOrganizer.email,
        },
        'goticket123',
      );
      const isValidPassword = await compare(
        req.body.password,
        loginOrganizer.password,
      );
      if (!isValidPassword) {
        throw new Error('Invalid passowrd');
      }
      return res.status(200).send({
        username: loginOrganizer.username,
        email: loginOrganizer.email,
        token: jwtToken,
      });
    } catch (error: any) {
      console.log(error);
      return res.status(500).send('Invalid email or password');
    }
  }
}
