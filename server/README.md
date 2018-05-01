# Express.js with Babel Boilerplate

Based on the following boiler-plate (https://codeclimate.com/github/vmasto/express-babel). Thanks for making it easier to get a simple project started.

## Getting started

```sh
# Install dependencies
npm install
```

Then you can use:

```sh
# npm
npm start
```


### Testing

Testing is powered by [Jest](https://facebook.github.io/jest/). This project also uses [supertest](https://github.com/visionmedia/supertest) for demonstrating a simple routing smoke test suite. Feel free to remove supertest entirely if you don't wish to use it.

Start the test runner in watch mode with:

```sh
# npm
npm test
```

You can also generate coverage with:

```sh
# npm
npm test -- --coverage
```

### Linting

Linting is set up using [ESLint](http://eslint.org/). It uses ESLint's default [eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint.json) rules. Feel free to use your own rules and/or extend another popular linting config (e.g. [airbnb's](https://www.npmjs.com/package/eslint-config-airbnb) or [standard](https://github.com/feross/eslint-config-standard)).

Begin linting in watch mode with:

```sh
# npm
npm run lint
```

To begin linting and start the server simultaneously, edit the `package.json` like this:

```
"dev": "nodemon src/index.js --exec \"node -r dotenv/config -r babel-register\" | npm run lint"
```

### Environmental variables in development

The project uses [dotenv](https://www.npmjs.com/package/dotenv) for setting environmental variables during development. Simply update `.env.config` your env vars as you see fit. 

It is **strongly** recommended **never** to check in your `.env.config` file to version control. It should only include environment-specific values such as database passwords or API keys used in development. Your production env variables should be different and be set differently depending on your hosting solution.

### Deployment

Deployment is specific to hosting platform/provider but generally:

```sh
# yarn
yarn run build

# npm
npm run build
```

will compile your `src` into `/dist`, and 

```sh
# npm
npm start
```

will run `build` (via the `prestart` hook) and start the compiled application from the `/dist` folder.

The last command is generally what most hosting providers use to start your application when deployed, so it should take care of everything.

You can find small guides for Heroku, App Engine and AWS in [the deployment](DEPLOYMENT.md) document.

## FAQ

**Where is all the configuration for ESLint, Jest and Babel?**

In `package.json`. Feel free to extract them in separate respective config files if you like.

**Why are you using `babel-register` instead of `babel-node`?**

`babel-node` contains a small "trap", it loads Babel's [polyfill](https://babeljs.io/docs/usage/polyfill/) by default. This means that if you use something that needs to be polyfilled, it'll work just fine in development (because `babel-node` polyfills it automatically) but it'll break in production because it needs to be explicitely included in Babel's CLI which handles the final build.

In order to avoid such confusions, `babel-register` is a more sensible approach in keeping the development and production runtimes equal. By using [babel-preset-env](https://github.com/babel/babel-preset-env) only code that's not supported by the running environment is transpiled and any polyfills required are automatically inserted.

**Should I use this?**

Full disclosure: If you have to ask perhaps you should reconsider. There is some debate on whether to use Babel-transpiled code on the server or not. Personally, I think it's fine and I've found this setup to be a sensible approach in doing so. That said, I'd suggest to take anything you read online with a grain of salt and refrain from blindly using boilerplates without first investigating personally.

Node is very rapidly converging with the latest ECMAScript specification, and there's mostly full native support for ES2015 and ES2016. The need to transpile on the server is way smaller nowadays, albeit the language is constantly improving and transpiling will probably always be a part of our workflow. At the time of this writing the main benefits are mainly ES6 module syntax and async/await without flags.

In any case, you can simply remove transpilation and keep everything else that this kit has to offer.

If you see anything that needs improvement feel free to open an issue for discussion!

You can also find me on twitter at [@vmasto](https://twitter.com/vmasto).

## License
MIT License. See the [LICENSE](LICENSE) file.
