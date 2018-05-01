declare module "morgan-debug" {
  function logger(
       prefix: string,
       style: string,
       options: any
   ): any;
   export = logger;
}