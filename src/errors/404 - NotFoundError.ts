import { statuses } from './errorStatuses';

class NotFoundError extends Error {
  statusCode: number;
  
  constructor(message: string) {
    super(message);
    this.statusCode = statuses.ERROR_NOT_FOUND;
  }
}

export default NotFoundError;
