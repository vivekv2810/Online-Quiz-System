import { Router, Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { users, User } from '../models/user';

const router = Router();
const JWT_SECRET = 'supersecretkey';  // In production, use environment variables

// Register User
router.post('/register', async (req: Request, res: Response) => {
  const { username, password, name, email } = req.body;

  // Basic validation
  if (!username || !password || !name || !email) {
    return res.status(400).json({ message: 'Please provide all required fields.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser: User = {
    id: users.length + 1,
    username,
    password: hashedPassword,
    profile: { name, email },
    scoreHistory: [],  // Initialize with an empty array
  };

  users.push(newUser);
  res.status(201).json({ message: 'User registered successfully!' });
});

// Login User
router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ message: 'Invalid username or password!' });

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) return res.status(400).json({ message: 'Invalid username or password!' });

  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Middleware to verify JWT
export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });
    req.user = user;  // TypeScript now understands this property
    next();
  });
}

// Get user profile route
router.get('/profile', authenticateToken, (req: Request, res: Response) => {
  const user = users.find(u => u.id === req.user?.id);  // Use optional chaining here
  if (!user) return res.status(404).json({ message: 'User not found!' });
  res.json(user.profile);
});

export default router;
