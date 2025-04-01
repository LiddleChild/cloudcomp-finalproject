# Spirit Together

### Development

- pnpm

- Fill out secrets in `.env`

- To start / stop local database server

```bash
docker compose -f docker-compose.db.yaml up
docker compose -f docker-compose.db.yaml down
```

- Database credentials

  | Credentials | Value      |
  | ----------- | ---------- |
  | user        | `postgres` |
  | password    | `123456`   |
  | database    | `postgres` |

- Database schema is at `migrations/schema.sql`.
  Postgres will automatically load this file on start and _only_ on start.

- To start / stop whole app. This will build the app and run together with database.

```bash
docker compose up
docker compose down
```

> **Note:** Make sure the app can be built with `pnpm run build`
