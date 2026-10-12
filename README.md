# Next.js Caching Demo

A project for exploring how caching works in the Next.js App Router. The frontend is a Next.js app written in TypeScript, and the data comes from a separate Express backend.

## Tech Stack

- Next.js 14 (App Router), React 18, TypeScript
- Express (backend), run with `tsx`

## Features

- List of messages fetched from the backend
- Form for adding a new message (Server Action)
- Tag-based cache revalidation: messages are cached with the `msg` tag and invalidated with `revalidateTag('msg')` after a new message is created

## Project Structure

```
.
├── app/                  # Next.js routes and layouts
│   └── messages/         # Messages list and "new message" form
├── components/           # Shared UI components
├── lib/messages.ts       # Data access layer (talks to the backend)
└── backend/              # Express API (GET/POST /messages)
```

## Getting Started

### 1. Backend

```bash
cd backend
npm install
npm start
```

The API runs on `http://localhost:8080` (or on `PORT` if it is set).

### 2. Frontend

In the project root, create `.env.local`:

```
BACKEND_URL=http://localhost:8080
```

Then run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To see the full caching behavior, use a production build, since the Full Route Cache is not active in dev mode:

```bash
npm run build
npm start
```

## Environment Variables

| Variable      | Description                                  |
| ------------- | -------------------------------------------- |
| `BACKEND_URL` | Base URL of the backend API, no trailing `/` |

## Deployment

- **Backend:** deployed on [Render](https://render.com) as a Web Service (Root Directory `backend`, Build Command `npm install`, Start Command `npm start`).
- **Frontend:** deployed on [Vercel](https://vercel.com) with `BACKEND_URL` pointing to the Render service.

Note: the backend stores messages in memory, so data resets when the service restarts.
