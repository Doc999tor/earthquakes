import { Request, NextFunction } from 'express'

import { HistoryRequest } from './history-controller'

export function historyValidator(req: Request & { query: HistoryRequest }, res, next: NextFunction) {
	let err = false, err_msg = ''
	if (!req.query.starttime) { err = true; err_msg = 'no starttime' }
	if (!req.query.endtime) { err = true; err_msg = 'no endtime' }
	if (!req.query.minmagnitude) { err = true; err_msg = 'no minmagnitude' }
	if (!req.query.latitude) { err = true; err_msg = 'no latitude' }
	if (!req.query.longitude) { err = true; err_msg = 'no longitude' }
	if (!req.query.maxradiuskm) { err = true; err_msg = 'no maxradiuskm' }

	if (err) {
		throw new Error('Login failed, reason: ' + err_msg);
	} else {
		next()
	}
}
