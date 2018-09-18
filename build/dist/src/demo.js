"use strict";
exports.__esModule = true;
var canvas_fit_margin_ts_1 = require("canvas-fit-margin-ts");
var scale = window.devicePixelRatio || 1;
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
var fit = canvas_fit_margin_ts_1.createFit(canvas, { scale: scale });
document.body.style.margin = '0';
document.body.appendChild(canvas);
function render(width, height) {
    var gradient = context.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, '#00b4db');
    gradient.addColorStop(1, '#0083b0');
    context.clearRect(0, 0, width, height);
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
}
var onResize = function () {
    var _a = fit(), width = _a[0], height = _a[1];
    render(width, height);
};
onResize();
window.addEventListener('resize', onResize);
//# sourceMappingURL=demo.js.map