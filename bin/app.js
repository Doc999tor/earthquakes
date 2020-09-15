"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const path = require("path");
const run_env = require('dotenv').config({ path: path.join(__dirname, `./app.env`) });
if (run_env.error) {
    throw new Error(run_env.error);
}
const express = require("express");
const history_controller_1 = require("./history-controller");
const app = express();
const port = process.env.INCOMING_PORT || process.env.INCOMING_PORT + Math.trunc(Math.random() * 100).toString().padStart(2, '0');
app.use('/history', history_controller_1.HistoryController);
app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});
exports.server = app.listen(port, () => console.log('listening on port ' + port))
    .on('error', syscallErrorHandler);
process.on("uncaughtException", error => {
    console.log('uncaughtException');
    console.error(error);
    process.exit(1);
});
process.on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at:', p, 'reason:', reason);
    process.exit(1);
});
function syscallErrorHandler(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
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
