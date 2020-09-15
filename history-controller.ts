import { Router, Request, Response } from 'express'
import * as axios from 'axios'

import { historyValidator } from './history-validators'
import { serializeQueryString} from './utils/query-helpers'

const router = Router()

export interface HistoryRequest {
	starttime: string,
	endtime: string,
	minmagnitude: string,
	latitude: string,
	longitude: string,
	maxradiuskm: string,
}
interface ApiResponse {
	// TODO
}
router.get('', historyValidator, async (req: Request & { query: HistoryRequest }, res: Response) => {
	const queryParams: HistoryRequest & { format: string } = { ...req.query as HistoryRequest, ...{ format: 'geojson' } }
	const apiResponse = await axios.default.get(`${ process.env.API_PATH }?${ serializeQueryString(queryParams) }`)
	console.log(apiResponse.data);

	const earthquakes = apiResponse.data.features

	const minmagnitude = Math.min(...earthquakes.map(earthquake => earthquake.properties.mag))
	const count = earthquakes.length
	res.json({ minmagnitude, count })
})

export { router as HistoryController }

