"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.historyValidator = void 0;
function historyValidator(req, res, next) {
    let err = false, err_msg = '';
    if (!req.query.starttime) {
        err = true;
        err_msg = 'no email';
    }
    if (!req.query.endtime) {
        err = true;
        err_msg = 'no email';
    }
    if (!req.query.minmagnitude) {
        err = true;
        err_msg = 'no email';
    }
    if (!req.query.latitude) {
        err = true;
        err_msg = 'no email';
    }
    if (!req.query.longitude) {
        err = true;
        err_msg = 'no email';
    }
    if (!req.query.maxradiuskm) {
        err = true;
        err_msg = 'no email';
    }
    if (err) {
        throw new Error('Login failed, reason: ' + err_msg);
    }
    else {
        next();
    }
}
exports.historyValidator = historyValidator;
