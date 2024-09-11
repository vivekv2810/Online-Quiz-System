import express, { Application, Request, Response } from 'express';
import path from 'path';

const app: Application = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// Route to serve the quiz HTML page
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import quizRoutes from './routes/quiz';

app.use(quizRoutes);

import authRoutes from './users/auth';

app.use('/auth', authRoutes);

