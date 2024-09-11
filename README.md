# Online Quiz System

## Overview

The Online Quiz System is a web application designed to facilitate online quizzes with features like user authentication, quiz submission, scoring, and user profile management. It utilizes Node.js, Express.js, TypeScript, and a few other technologies to provide a seamless quiz experience.

## Features

- **User Authentication**: Register, login, and manage user profiles with JWT-based authentication.
- **Quiz Management**: Fetch and submit quizzes, with real-time feedback and question randomization.
- **Score History**: Track user scores over time and view quiz results.
- **Profile Management**: Update and view user profiles with additional information.

## Technology Stack

- **Backend**: Node.js, Express.js
- **Language**: TypeScript
- **Frontend**: HTML, CSS
- **Database**: In-memory storage (simulated with arrays)

## Directory Structure
```
online-quiz-system/
├── src/
│   ├── controllers/           # Controllers for handling business logic
│   ├── models/                # Data models
│   │   └── user.ts            # User model and types
│   ├── routes/                # API routes
│   │   └── quiz.ts            # Quiz-related routes
│   ├── types/                 # TypeScript type definitions
│   │   └── express.d.ts       # Custom type definitions
│   ├── users/                 # User authentication routes
│   │   └── auth.ts            # Authentication and user profile routes
│   ├── app.ts                 # Main application setup
│   ├── custom.d.ts            # Additional type definitions
│   └── server.ts              # Server setup and initialization
├── public/                    # Static files (HTML, CSS, JS)
│   ├── index.html
│   ├── style.css
│   └── quiz.js
├── package.json               # Project metadata and dependencies
├── tsconfig.json              # TypeScript configuration
└── node_modules/              # Project dependencies
```

## Installation

1. **Clone the Repository**:

   ```
   git clone https://github.com/yourusername/online-quiz-system.git
   cd online-quiz-system
   ```

2. **Install Dependencies**:

   ```
   npm install
   ```

3. **Build and Run** :

   - To compile the TypeScript code:

   ```
    npx tsc
   ```
 
 - To start the server:

   ```
    npm start
   ```
