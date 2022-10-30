import { statuses } from './errorStatuses';

class BadRequestError extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = statuses.ERROR_CODE;
  }
}

export default BadRequestError;
