import * as path from 'path';

export interface ProcessEnv { // doesn't complain about wrong props because of tsconfig permittive settings
	INCOMING_PORT: string;
	NODE_ENV: string;
	ROOT_PATH: string;
}

const run_env = require('dotenv').config({path: path.join(__dirname, `./app.env`)});
if (run_env.error) { throw new Error (run_env.error); }

import * as express from 'express';

import { HistoryController } from './history-controller'


const app = express();
const port = process.env.INCOMING_PORT || process.env.INCOMING_PORT + Math.trunc(Math.random()*100).toString().padStart(2, '0');

app.use('/history', HistoryController)

app.use((error: Error, req: express.Request, res: express.Response, next) => {
	console.error(error);
	res.sendStatus(500)
});

export const server = app .listen(port, () => console.log('listening on port ' + port))
	.on('error', syscallErrorHandler)

process.on("uncaughtException", error => {
	console.log('uncaughtException');
	console.error(error)
	process.exit(1);
});
process.on('unhandledRejection', (reason, p) => {
	console.error('Unhandled Rejection at:', p, 'reason:', reason);
	process.exit(1);
});

function syscallErrorHandler (error) {
	if (error.syscall !== 'listen') { throw error; }

	switch (error.code) {
		case 'EACCES':
			console.error(port + ' requires a permission');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(port + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}
