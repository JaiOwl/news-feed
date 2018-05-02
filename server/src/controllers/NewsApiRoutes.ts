import { escape } from 'querystring';
import { Response, Request, NextFunction, Router } from 'express';

import { NewsApiOrgClient, INewsApiRequestOptions } from '../models/news-api-org/NewsApiOrgClient';
import { INewsApiArticle } from 'newsapi';
import { ExpressError } from '../models/ExpressError';

export class NewsApiRoutes {
  private routes: Router;
  private newsApiOrgClient: NewsApiOrgClient;

  constructor () {
    this.routes = Router();
    this.newsApiOrgClient = new NewsApiOrgClient( process.env.NEWS_API_ORG_KEY );

    /**
     * GET API Top News Headlines
     */
    this.routes.get('/topnewsheadlines',
      async ( req: Request, res: Response, next: NextFunction ) => {
        const options: INewsApiRequestOptions = {};

        try {
          const articles: Array<INewsApiArticle> = await this.newsApiOrgClient.getTopHeadlines(options);
          res.status( 200 );
          res.json( articles );
        } catch (error) {
          next( new ExpressError(error.message) );
        }
      }
    );

    /**
     * POST API Top News Headlines
     */
    this.routes.post('/topnewsheadlines',
      async ( req: Request, res: Response, next: NextFunction ) => {
        const data: INewsApiRequestOptions = req.body;
        const options: INewsApiRequestOptions = {};

        if (data.queryString != undefined) {
          options.queryString = escape(data.queryString);
        }

        try {
          const articles: Array<INewsApiArticle> = await this.newsApiOrgClient.getTopHeadlines(options);
          res.status( 200 );
          res.json( articles );
        } catch (error) {
          next( new ExpressError(error.message) );
        }
      }
    );
  }

  get router (): Router {
    return this.routes;
  }
}

