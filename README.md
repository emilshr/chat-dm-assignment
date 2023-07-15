# Test assignment - Chat app with DMs feature

## How do I run locally?

- Create a `.env` file at the root of the repository with the following content

```env
PORT=3001
VITE_SERVER_URL=http://localhost:3001/
DB_URL=postgresql://<username>:<password>@localhost:5432/chat-dm
SECRET=xxxxxxx
NODE_ENV=development
```

At the root of the repository, just run `npm run dev`

## Application structure

This is a monorepo containing both backend & frontend part of the application. I am not using any mono repo solution, this is a make shift mono repo.
