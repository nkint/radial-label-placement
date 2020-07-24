"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.offsetY = exports.offsetX = exports.strokeBoundingBox = exports.getTickData = exports.pointOnCircle = void 0;
function pointOnCircle(angle, radius, center) {
    return [Math.cos(angle) * radius + center[0], Math.sin(angle) * radius + center[1]];
}
exports.pointOnCircle = pointOnCircle;
function getTickData(ticks, radius, center) {
    return ticks.map(function (tick) {
        var angle = tick.angle * Math.PI;
        var p1 = pointOnCircle(angle, radius, center);
        var p2 = pointOnCircle(angle, radius - 25, center);
        var p3 = pointOnCircle(angle, radius + 15, center);
        return __assign(__assign({}, tick), { angle: angle, p1: p1, p2: p2, p3: p3 });
    });
}
exports.getTickData = getTickData;
function strokeBoundingBox(context, point, width, height, textAlign, textBaseline) {
    context.strokeRect(point[0] + exports.offsetX[textAlign](width), point[1] + exports.offsetY[textBaseline](height), width, height);
}
exports.strokeBoundingBox = strokeBoundingBox;
exports.offsetX = {
    start: function (w) { return 0; },
    center: function (w) { return -w / 2; },
    end: function (w) { return -w; }
};
exports.offsetY = {
    top: function (h) { return 0; },
    middle: function (h) { return -h / 2; },
    bottom: function (h) { return -h; }
};
//# sourceMappingURL=utils.js.map