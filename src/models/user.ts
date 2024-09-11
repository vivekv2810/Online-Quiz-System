export interface Profile {
  name: string;
  email: string;
}

export interface User {
  id: number;
  username: string;
  password: string;
  profile: Profile;  // Added profile field
  scoreHistory: number[];  // Added scoreHistory field
}

// Mock users array
export const users: User[] = [];
