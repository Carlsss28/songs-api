# Songs API (practice backend for SongApp)

Small Express API with sample songs, for practicing Kotlin + Jetpack Compose.

## Endpoints

- `GET /` - health check
- `GET /songs` - list all songs (optional `?genre=Rock`)
- `GET /songs/:id` - song detail (404 if not found)

## Song fields

`id`, `title`, `artist`, `album`, `year`, `duration`, `genre`, `rating`, `imageUrl`

## Run locally

```
npm install
npm start
```

Runs on http://localhost:3000 (Android emulator: http://10.0.2.2:3000/).

## Deploy on Render

1. Push this folder to a GitHub repository.
2. In Render: New > Web Service > connect the repo.
3. Build command: `npm install`, Start command: `npm start`, plan Free.
   (Or use New > Blueprint, which reads `render.yaml`.)
4. Use the generated URL as the Retrofit base URL, with a trailing slash.
