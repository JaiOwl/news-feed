import { Response, Request, NextFunction, Router } from 'express';
import packageJson from '../../package.json';

export class ApiRoutes {
  private routes: Router;

  constructor () {
    this.routes = Router();

    /**
     * GET API Version
     */
    this.routes.get('/version', ( req: Request, res: Response ) => {
      res.status( 200 );
      res.json( this.version );
    });
  }

  get router (): Router {
    return this.routes;
  }

  get version () {
    return { service: `${packageJson.name}`, version: `${packageJson.version}` };
  }
}

