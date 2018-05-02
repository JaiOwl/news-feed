import { Response, Request, NextFunction, Router } from 'express';

import { NewsApiRoutes } from './NewsApiRoutes';
import packageJson from '../../package.json';

export class ApiRoutes {
  private routes: Router;
  private newsApiRoutes: NewsApiRoutes;

  constructor () {
    this.routes = Router();
    this.newsApiRoutes = new NewsApiRoutes();

    /**
     * GET API Version
     */
    this.routes.get('/version', ( req: Request, res: Response ) => {
      res.status( 200 );
      res.json( this.version );
    });

    // Add News API Routes
    this.router.use(this.newsApiRoutes.router);
  }

  get router (): Router {
    return this.routes;
  }

  get version () {
    return { service: `${packageJson.name}`, version: `${packageJson.version}` };
  }
}

