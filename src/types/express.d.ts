import { User } from '../models/user';  // Adjust the import path if necessary

declare global {
  namespace Express {
    interface Request {
      user?: User;  // Add the user property
    }
  }
}

export {};
