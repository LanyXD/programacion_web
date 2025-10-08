# HW 6 — Docker

## Objective
Deploy the project from Homework 5 using Docker efficiently, ensuring:
- Lightweight and secure image (non-root)
- Use of Postgres as the database
- Migrations executed inside the container, not in the image
- Good Docker and Django practices

## Requirements
- Docker >= 20.x
- docker-compose >= 1.29.x
- Python 3.11
- Default credentials included in `.env`

## Main Files
- `Dockerfile` — Builds the app image
- `docker-compose.yml` — Defines `web` and `db` services
- `entrypoint.sh` — Waits for the database and runs migrations
- `.env` — Environment variables
- `requirements.txt` — Python dependencies

## Running with Docker
1. Build image and start containers:
   ```bash
   docker compose up --build
   ```
   This will:
   - Build the `web` image
   - Start Postgres
   - Wait until the database is ready
   - Run `python manage.py migrate` and `collectstatic`
   - Start Gunicorn on `0.0.0.0:8000`

2. Open the app in your browser:
   ```
   http://localhost:8000
   ```

3. To stop the services:
   ```bash
   docker compose down
   ```
