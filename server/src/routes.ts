import { Request, Response, Router } from 'express';
import packageJson from '../package.json';
import { ApiRoutes } from './controllers/api';

export class Routes {
  private routes: Router;
  private apiRoutes: ApiRoutes;

  constructor () {
    this.routes = Router();
    this.apiRoutes = new ApiRoutes();

    /**
     * GET test home page
     */
    this.routes.get('/',
      ( req: Request, res: Response ) => {
        res.render('index', { title: packageJson.name });
      }
    );

    /**
     * Pass API requests to API route handler
     */
    this.routes.use('/api', this.apiRoutes.router);
  }

  get router (): Router {
    return this.routes;
  }
}
