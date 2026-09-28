# LearnMate Backend

Backend based on the supplied LearnMate / AI StudyBuddy document.

## Setup
1. Copy `.env.example` to `.env`.
2. Add your MongoDB Atlas URI, JWT secret and Gemini API key.
3. Run `npm install`.
4. Run `npm start`.

## APIs
POST /api/auth/register
POST /api/auth/login
POST /api/material/upload
GET /api/material
POST /api/material/:id/summarize
POST /api/ai/flashcards/:id
POST /api/ai/quiz/:id
POST /api/ai/study-plan
GET /api/admin/dashboard
GET /api/admin/users

Do not share or commit `.env`.
