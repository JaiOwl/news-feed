
export class ExpressError extends Error {
  private statusCode: number;

  constructor(message: string) {
    super(message);
  }

  get status (): number  { return this.statusCode; }
  set status (value) { this.statusCode = value; }
}
