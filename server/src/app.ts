import express from 'express';
import { Response, Request, NextFunction } from 'express';
import path from 'path';
import logger from 'morgan-debug';
import bodyParser from 'body-parser';
import { Routes } from './routes';
import { ExpressError } from './models/ExpressError';

const {
  COIN_MARKER_API_UPDATE_INTERVAL = (60 * 1000)
} = process.env;

const {
  PUBLIC_DIR = '../public',
  VIEWS_DIR = '../views'
} = process.env;

const app = express();
app.disable('x-powered-by');

// View engine setup
app.set('views', path.join(__dirname, VIEWS_DIR));
app.set('view engine', 'pug');

app.use(logger('debug', 'combined', {
  skip: () => app.get('env') === 'test'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, PUBLIC_DIR), { index: 'index.html' }) );

// Routes
const routes = new Routes();
app.use('/', routes.router );

// Default index
app.use('^(?!/api/*).*', express.static(path.join(__dirname, PUBLIC_DIR), { index: 'index.html' }) );

// Catch 404 and forward to error handler
app.use(
  ( req: Request, res: Response, next: NextFunction ) => {
    const err = new ExpressError('Not Found');
    err.status = 404;
    next(err);
  }
);

// Error handler
app.use(
  ( err: any, req: Request, res: Response, next: NextFunction ) => {
    res
      .status(err.status || 500)
      .render('error', {
        message: err.message
      }
    );
  }
);

export default app;
