"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var ava_1 = __importDefault(require("ava"));
var index_1 = require("../src/index");
ava_1["default"](function (t) {
    var expected = [
        { textAlign: 'start', textBaseline: 'middle' },
        { textAlign: 'start', textBaseline: 'top' },
        { textAlign: 'center', textBaseline: 'top' },
        { textAlign: 'end', textBaseline: 'top' },
        { textAlign: 'end', textBaseline: 'middle' },
        { textAlign: 'end', textBaseline: 'bottom' },
        { textAlign: 'center', textBaseline: 'bottom' },
        { textAlign: 'start', textBaseline: 'bottom' },
        { textAlign: 'start', textBaseline: 'bottom' },
    ];
    var input = [0, 1 / 4, 1 / 2, 3 / 4, 1, 5 / 4, 3 / 2, 7 / 4, 2].map(function (x) { return x * Math.PI; });
    var output = input.map(index_1.radialLabelPlacement);
    t.deepEqual(expected, output);
});
//# sourceMappingURL=index.js.map