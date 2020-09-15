"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryController = void 0;
const express_1 = require("express");
const axios = require("axios");
const query_helpers_1 = require("./utils/query-helpers");
const router = express_1.Router();
exports.HistoryController = router;
interface;
router.get('', async (req, res) => {
    const queryParams = { ...req.query, ...{ format: 'geojson' } };
    const apiResponse = await axios.default.get(`${process.env.API_PATH}?${query_helpers_1.serializeQueryString(queryParams)}`);
    console.log(apiResponse.data);
    const earthquakes = apiResponse.data.features;
    const minmagnitude = res.json(apiResponse.data);
});
