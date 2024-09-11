import express from 'express';
import quizRoutes from './routes/quiz'; // Adjust path if necessary
import authRoutes from './users/auth'; // Adjust path if necessary

const app = express();
app.use(express.json());

// Use routes
app.use('/api/quiz', quizRoutes);
app.use('/api/auth', authRoutes);

// Add other middleware and routes as needed

export default app;
