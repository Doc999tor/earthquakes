"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeQueryString = void 0;
function serializeQueryString(body) {
    return Object.entries(body)
        .map(kv => encodeURIComponent(kv[0]) + '=' + encodeURIComponent(kv[1].toString()))
        .join('&');
}
exports.serializeQueryString = serializeQueryString;
