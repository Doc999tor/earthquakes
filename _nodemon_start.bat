set TS_NODE_PROJECT=tsconfig.json
set TS_NODE_TRANSPILE_ONLY=true
nodemon --watch "*.ts" --exec "ts-node app.ts" app.ts
