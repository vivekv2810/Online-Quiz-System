import { User } from './models/user';  // Assuming the User type is defined in models/user.ts

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}