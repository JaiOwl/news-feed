import { accessSync, constants } from 'fs';

import debug from 'debug';
import dotenv from 'dotenv';
import app from './app';

// Configure logger pre-environment variables loading
debug.enable('*');
const infoLogger = debug('info:index');

const { NODE_ENV_CONFIG = './.env.config' } = process.env;
try {
    infoLogger(`Environment Configuration File => ${NODE_ENV_CONFIG}`);
    accessSync(NODE_ENV_CONFIG, constants.R_OK );
    dotenv.load({ path: NODE_ENV_CONFIG });
} catch (err) {
    infoLogger(`Unable to load Environment Configuration File => ${NODE_ENV_CONFIG}`);
}

const {
    // Host HTTP Port
    PORT = 8080,
    // Debug enable pattern
    DEBUG = 'debug:*,info:*,warn:*,error:*'
} = process.env;

debug.enable(DEBUG);
app.listen(PORT, () => infoLogger(`Listening on port ${PORT}`));
