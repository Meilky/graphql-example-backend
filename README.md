# graphql-example-backend


The dev build will not have the reload on window because docker can't catch right signal from ntfs file system.

Change `$(pwd)` to `$PWD` from prod build on windows (in powershell).

Build the app:
```bash
# Buld in dev
docker build --target "dev" -t "graphql-backend:dev" .

# Buld in prod
docker build --target "prod" -t "graphql-backend:prod" .
```

Run the app:
```bash
# Run in dev
docker run -d -p docker run -d -p "3000:3000" -v "$(pwd)/src:/usr/app/src" --name "graphql-backend-dev" graphql-backend:dev

# Run in prod
docker run -d -p docker run -d -p "3000:3000" -v "$(pwd)/src:/usr/app/src" --name "graphql-backend-prod" graphql-backend:prod
```
