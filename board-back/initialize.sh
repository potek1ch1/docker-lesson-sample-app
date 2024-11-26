#!/bin/sh
set -e
bunx prisma migrate dev --name init
bunx prisma migrate deploy
bunx prisma db seed
bun build ./src/index.ts --target=bun --outfile=./out/server.js
bun ./out/server.js