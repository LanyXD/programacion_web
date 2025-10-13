# Assessment-3

## Structure

- **Frontend:** React app with "Hide" and "Reveal" sections.  
- **Backend:** Django API that generates a unique key and stores messages in Redis.  
- **Database:** Redis stores messages temporarily; keys are deleted after being revealed.

## Run

```bash
docker compose up --build

Frontend: http://localhost:5173
Backend API: http://localhost:8000

```

