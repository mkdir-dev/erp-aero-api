import { statuses } from './errorStatuses';

class UnauthorizedError extends Error {
  statusCode: number;
  
  constructor(message: string) {
    super(message);
    this.statusCode = statuses.ERROR_AUTH;
  }
}

export default UnauthorizedError;
