import { statuses } from "./errorStatuses";

class ConflictError extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = statuses.ERROR_CONFLICT;
  }
}

export default ConflictError;
