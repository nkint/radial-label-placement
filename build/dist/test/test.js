"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var ava_1 = __importDefault(require("ava"));
var src_1 = require("../src");
var utils_1 = require("../src/utils");
ava_1["default"]('common case', function (t) {
    var expected = [
        { textAlign: 'start', textBaseline: 'middle' },
        { textAlign: 'start', textBaseline: 'top' },
        { textAlign: 'center', textBaseline: 'top' },
        { textAlign: 'end', textBaseline: 'top' },
        { textAlign: 'end', textBaseline: 'middle' },
        { textAlign: 'end', textBaseline: 'bottom' },
        { textAlign: 'center', textBaseline: 'bottom' },
        { textAlign: 'start', textBaseline: 'bottom' },
        { textAlign: 'start', textBaseline: 'middle' },
    ];
    var input = [0, 1 / 4, 1 / 2, 3 / 4, 1, 5 / 4, 3 / 2, 7 / 4, 2].map(function (x) { return x * Math.PI; });
    var output = input.map(src_1.radialLabelPlacement);
    t.deepEqual(expected, output);
});
ava_1["default"]('Math.PI * 2 - 0.001', function (t) {
    var expected = { textAlign: 'start', textBaseline: 'bottom' };
    var input = Math.PI * 2 - 0.1;
    var output = src_1.radialLabelPlacement(input);
    t.deepEqual(expected, output);
});
ava_1["default"]('More then Math.PI * 2', function (t) {
    var expected = { textAlign: 'start', textBaseline: 'middle' };
    var input = [0.1, Math.PI * 2 + 0.1];
    input.forEach(function (i) {
        var output0 = src_1.radialLabelPlacement(i);
        t.deepEqual(expected, output0);
    });
});
ava_1["default"]('Negative angles', function (t) {
    var expected = [
        { textAlign: 'start', textBaseline: 'middle' },
        { textAlign: 'start', textBaseline: 'bottom' },
        { textAlign: 'center', textBaseline: 'bottom' },
        { textAlign: 'end', textBaseline: 'bottom' },
        { textAlign: 'end', textBaseline: 'middle' },
        { textAlign: 'end', textBaseline: 'top' },
        { textAlign: 'center', textBaseline: 'top' },
        { textAlign: 'start', textBaseline: 'top' },
        { textAlign: 'start', textBaseline: 'middle' },
    ];
    var input = [0, 45, 90, 135, 180, 225, 270, 315, 360].map(function (x) { return -utils_1.degToRad(x); });
    var output = input.map(src_1.radialLabelPlacement);
    t.deepEqual(expected, output);
});
//# sourceMappingURL=test.js.map