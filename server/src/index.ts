import { accessSync, constants } from 'fs';

import debug from 'debug';
import dotenv from 'dotenv';

// Configure logger pre-environment variables loading
debug.enable('*');
const infoLogger = debug('info:index');
const errorLogger = debug('error:index');

const { NODE_ENV_CONFIG = './.env.config' } = process.env;
try {
    infoLogger(`Environment Configuration File => .env`);
    accessSync('.env', constants.R_OK );
    dotenv.load({ path: '.env' });
} catch (err) {
    infoLogger(`Unable to load Environment Configuration File => .env`);
}
try {
    infoLogger(`Environment Configuration File => ${NODE_ENV_CONFIG}`);
    accessSync(NODE_ENV_CONFIG, constants.R_OK );
    dotenv.load({ path: NODE_ENV_CONFIG });
} catch (err) {
    infoLogger(`Unable to load Environment Configuration File => ${NODE_ENV_CONFIG}`);
}

if (process.env.NEWS_API_ORG_KEY !== undefined) {
    infoLogger(`Using NewsApi API Key ${process.env.NEWS_API_ORG_KEY}`);
} else {
    errorLogger(`No NewsApi API Key provided, please ensure NEWS_API_ORG_KEY is present in your .env conig file.`);
    process.exit(-1);
}

const {
    // Host HTTP Port
    PORT = 8080,
    // Debug enable pattern
    DEBUG = 'debug:*,info:*,warn:*,error:*'
} = process.env;

debug.enable(DEBUG);

import app from './app';
app.listen(PORT, () => infoLogger(`Listening on port ${PORT}`));
