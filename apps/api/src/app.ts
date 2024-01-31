// import express, {
//   json,
//   urlencoded,
//   Express,
//   Request,
//   Response,
//   NextFunction,
//   Router,
// } from 'express';
// import cors from 'cors';
// import { PORT } from './config';
// // import { SampleRouter } from './routers/sample.router';
// import { AuthRouter } from './routers/auth.router';

// export default class App {
//   private app: Express;

//   constructor() {
//     this.app = express();
//     this.configure();
//     this.routes();
//     this.handleError();
//   }

//   private configure(): void {
//     this.app.use(cors());
//     this.app.use(json());
//     this.app.use(urlencoded({ extended: true }));
//   }

//   private handleError(): void {
//     // not found
//     this.app.use((req: Request, res: Response, next: NextFunction) => {
//       if (req.path.includes('/api/')) {
//         res.status(404).send('Not found !');
//       } else {
//         next();
//       }
//     });

//     // error
//     this.app.use(
//       (err: Error, req: Request, res: Response, next: NextFunction) => {
//         if (req.path.includes('/api/')) {
//           console.error('Error : ', err.stack);
//           res.status(500).send('Error !');
//         } else {
//           next();
//         }
//       },
//     );
//   }

//   //define routes from router directory

//   private routes(): void {
//     // const sampleRouter = new SampleRouter();
//     const authRouter = new AuthRouter();

//     this.app.get('/', (req: Request, res: Response) => {
//       res.send(`Hello, Purwadhika Student !`);
//     });

//     // this.app.use('/samples', sampleRouter.getRouter());
//     this.app.use('/auth', authRouter.getRouter());
//   }

//   public start(): void {
//     this.app.listen(PORT, () => {
//       console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
//     });
//   }
// }

// import express, {
//   json,
//   urlencoded,
//   Express,
//   Request,
//   Response,
//   NextFunction,
//   Router,
// } from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import { PORT } from './config';
// import { AuthRouter } from './routers/auth.router';
// import eventRouter from './routers/sample.router';

// export default class App {
//   private app: Express;

//   constructor() {
//     this.app = express();
//     this.configure();
//     this.routes();
//     this.handleError();
//   }

//   private configure(): void {
//     this.app.use(
//       cors({
//         origin: 'http://localhost:3000',
//         credentials: true,
//       }),
//     );
//     this.app.use(bodyParser.json());
//     this.app.use('/api', eventRouter);
//     // this.app.use(json());
//     this.app.use(urlencoded({ extended: true }));
//   }

//   private handleError(): void {
//     // not found
//     this.app.use((req: Request, res: Response, next: NextFunction) => {
//       if (req.path.includes('/api/')) {
//         res.status(404).send('Not found !');
//       } else {
//         next();
//       }
//     });

//     // error
//     this.app.use(
//       (err: Error, req: Request, res: Response, next: NextFunction) => {
//         if (req.path.includes('/api/')) {
//           console.error('Error : ', err.stack);
//           res.status(500).send('Error !');
//         } else {
//           next();
//         }
//       },
//     );
//   }

//   private routes(): void {
//     const authRouter = new AuthRouter();

//     this.app.get('/', (req: Request, res: Response) => {
//       res.send(`Hello, Purwadhika Student !`);
//     });

//     this.app.use('/auth', authRouter.getRouter());
//   }

//   public start(): void {
//     this.app.listen(PORT, () => {
//       console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
//     });
//   }
// }

// import express, { json, urlencoded, Express, Request, Response, NextFunction, Router } from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import { PORT } from './config';
// import { AuthRouter } from './routers/auth.router';
// import eventRouter from './routers/sample.router'

// export default class App {
//   private app: Express;

//   constructor() {
//     this.app = express();
//     this.configure();
//     this.routes();
//     this.handleError();

//   }

//   private configure(): void {
//     this.app.use(
//       cors({
//         origin: 'http://localhost:3000',
//         credentials: true,
//       }),
//     );
//     this.app.use(json());
//     this.app.use(urlencoded({ extended: true }));
//   }

//   private handleError(): void {
//     // not found
//     this.app.use((req: Request, res: Response, next: NextFunction) => {
//       if (req.path.includes('/api/')) {
//         res.status(404).send('Not found !');
//       } else {
//         next();
//       }
//     });

//     // error
//     this.app.use(
//       (err: Error, req: Request, res: Response, next: NextFunction) => {
//         if (req.path.includes('/api/')) {
//           console.error('Error : ', err.stack);
//           res.status(500).send('Error !');
//         } else {
//           next();
//         }
//       },
//     );
//   }

//   private routes(): void {
//     const authRouter = new AuthRouter();

//     this.app.get('/', (req: Request, res: Response) => {
//       res.send(`Hello, Purwadhika Student !`);
//     });

//     this.app.use('/auth', authRouter.getRouter());
//   }

//   public start(): void {
//     this.app.listen(PORT, () => {
//       console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
//     });
//   }
// }

import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
  Router,
} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PORT } from './config';
import { AuthRouter } from './routers/auth.router';
import { EventRouter } from './routers/event.router';

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(
      cors({
        origin: 'http://localhost:3000',
        credentials: true,
      }),
    );
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
  }

  private handleError(): void {
    // not found
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes('/api/')) {
        res.status(404).send('Not found !');
      } else {
        next();
      }
    });

    // error
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (req.path.includes('/api/')) {
          console.error('Error : ', err.stack);
          res.status(500).send('Error !');
        } else {
          next();
        }
      },
    );
  }

  private routes(): void {
    const authRouter = new AuthRouter();
    const eventRouter = new EventRouter();

    this.app.get('/', (req: Request, res: Response) => {
      res.send(`Hello, Purwadhika Student !`);
    });

    this.app.use('/auth', authRouter.getRouter());
    this.app.use('/events', eventRouter.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
    });
  }
}
