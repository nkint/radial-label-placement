"use strict";
exports.__esModule = true;
exports.degToRad = exports.radToDeg = exports.mod = exports.isInRange = void 0;
exports.isInRange = function (x, minMax) { return x >= minMax[0] && x <= minMax[1]; };
function mod(n, m) {
    return ((n % m) + m) % m;
}
exports.mod = mod;
function radToDeg(rad) {
    return rad * (180 / Math.PI);
}
exports.radToDeg = radToDeg;
function degToRad(deg) {
    return deg * (Math.PI / 180);
}
exports.degToRad = degToRad;
//# sourceMappingURL=utils.js.map