"use strict";
exports.__esModule = true;
var __1 = require("..");
var canvas_fit_margin_ts_1 = require("canvas-fit-margin-ts");
var utils_1 = require("./utils");
var scale = window.devicePixelRatio || 1;
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
var fit = canvas_fit_margin_ts_1.createFit(canvas, { scale: scale });
document.body.style.margin = '0';
document.body.appendChild(canvas);
var ticks = [
    { angle: 0, label: "0", labelOffset: [0, 15] },
    { angle: 1 / 4, label: "\u03C0 / 4", labelOffset: [0, 35] },
    { angle: 1 / 2, label: "\u03C0 / 2", labelOffset: [0, 35] },
    { angle: 3 / 4, label: "3/4 \u03C0", labelOffset: [0, 35] },
    { angle: 1, label: "\u03C0", labelOffset: [0, 25] },
    { angle: 5 / 4, label: "5/4 \u03C0", labelOffset: [-10, 0] },
    { angle: 3 / 2, label: "3/2 \u03C0", labelOffset: [0, -95] },
    { angle: 7 / 4, label: "7/4 \u03C0", labelOffset: [0, 0] },
];
function render(width, height) {
    var radius = Math.min(width, height) * 0.6;
    var center = [canvas.width / 2, canvas.height / 2];
    context.fillStyle = 'black';
    context.strokeStyle = 'black';
    context.arc(center[0], center[1], radius, 0, Math.PI * 2);
    context.stroke();
    context.save();
    context.translate.apply(context, center);
    context.beginPath();
    context.moveTo(-10, 0);
    context.lineTo(10, 0);
    context.stroke();
    context.moveTo(0, -10);
    context.lineTo(0, 10);
    context.stroke();
    context.restore();
    utils_1.getTickData(ticks, radius, center).forEach(function (tick) {
        context.fillStyle = 'black';
        context.strokeStyle = 'black';
        context.beginPath();
        context.moveTo.apply(context, tick.p1);
        context.lineTo.apply(context, tick.p2);
        context.stroke();
        var _a = __1.radialLabelPlacement(tick.angle), textAlign = _a.textAlign, textBaseline = _a.textBaseline;
        context.font = '48px monospace';
        context.textAlign = textAlign;
        context.textBaseline = textBaseline;
        context.fillText.apply(context, [tick.label].concat(tick.p3));
        context.fillStyle = '#bbb';
        context.strokeStyle = '#bbb';
        var box = context.measureText(tick.label);
        utils_1.strokeBoundingBox(context, tick.p3, box.width, 48, textAlign, textBaseline);
        context.moveTo.apply(context, tick.p3);
        context.arc(tick.p3[0], tick.p3[1], 4, 0, Math.PI * 2);
        context.fill();
        context.font = '18px monospace';
        context.fillText("textAlign: " + textAlign, tick.p3[0] + tick.labelOffset[0], tick.p3[1] + 22 + tick.labelOffset[1]);
        context.fillText("textBaseline: " + textBaseline, tick.p3[0] + tick.labelOffset[0], tick.p3[1] + 44 + tick.labelOffset[1]);
    });
}
var onResize = function () {
    var _a = fit(), width = _a[0], height = _a[1];
    render(width, height);
};
window.addEventListener('resize', onResize);
document.onreadystatechange = function () {
    onResize();
};
onResize();
if (module.hot) {
    module.hot.dispose(function () { return canvas.remove(); });
}
//# sourceMappingURL=demo.js.map