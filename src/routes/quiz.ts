import { Router, Request, Response } from 'express';
import { authenticateToken } from '../users/auth';  // Ensure this path is correct

const router = Router();

const quizData = [
  {
    id: 'q1',
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
    difficulty: 'easy',
  },
  {
    id: 'q2',
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 'Paris',
    difficulty: 'medium',
  },
  {
    id: 'q3',
    question: 'What is the square root of 144?',
    options: ['12', '13', '14', '15'],
    correctAnswer: '12',
    difficulty: 'hard',
  },
];


// Helper function to shuffle array
function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

router.get('/api/questions', authenticateToken, (req: Request, res: Response) => {
  const shuffledQuestions = shuffle([...quizData]);
  res.json(shuffledQuestions);
});

export default router;


