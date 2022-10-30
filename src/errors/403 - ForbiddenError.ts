import { statuses } from './errorStatuses';

class ForbiddenError extends Error {
  statusCode: number;
  
  constructor(message: string) {
    super(message);
    this.statusCode = statuses.ERROR_FORBIDDEN;
  }
}

export default ForbiddenError;
