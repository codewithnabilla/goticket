import { AuthController } from '@/controllers/auth.controller';
import { regisValidation } from '@/middleware/validator';
import { Router } from 'express';

export class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/register',
      regisValidation,
      this.authController.registerUser,
    );
    this.router.post('/login', this.authController.loginUser);
  }

  getRouter(): Router {
    return this.router;
  }
}
