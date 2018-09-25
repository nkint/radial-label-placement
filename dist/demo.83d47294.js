// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../index.ts":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*

Quadrant:


               ````````````````````
            ```         ``         ```
         ``             ``             ``
       ``               ``               ``
     ``                 ``                 ``
    `                   ``                   `
  ``         2          ``          3         ``
 ``                     ``                     ``
 `                      ``                      `
`                       ``                       `
`                       ``                       `
`                       ``                       `
.```````````````````````..```````````````````````.
`                       ``                       `
`                       ``                       `
`                       ``                       `
 `         1            ``        0             `
 ``                     ``                     ``
  ``                    ``                    ``
    `                   ``                   `
     ``                 ``                 ``
       ``               ``               ``
         ``             ``             ``
            ```         ``         ```
               ````````````````````


Edges:


                                3

                        ````-mNMMMMNm- ```
                    ```      NMMMMMMN      ```
                 ``          sMMMMMMs          ``
               ``            -MMMMMM-            ``
             ``               mMMMMm               ``
            `                 oMMMMo                 `
          ``                  .MMMM.                  `
          `                    mMMd                    `
         `                     oMMo                     `
        `                      .MM.                      `
        oso+/-.`                dd                `.-/+oso
        NMMMMMMMMNdhys+/:-`     ++     `-:/+syhdNMMMMMMMMN
2      MMMMMMMMMMMMMMMMMMMMmyo/::/oymMMMMMMMMMMMMMMMMMMMM     0
        NMMMMMMMMNdhys+/:-`     ++     `-:/+syhdNMMMMMMMMN
        oso+/-.`                dd                `.-/+oso
        `                      .MM.                      `
         `                     oMMo                     `
          `                    mMMd                    `
           `                  .MMMM.                  `
            `                 oMMMMo                 `
             ``               mMMMMm               ``
               ``            -MMMMMM-            ``
                 ``          sMMMMMMs          ``
                    ```      NMMMMMMN      ```
                        ` ``-mNMMMMNm- ` `

                                1

*/
var isInRange = function isInRange(x, minMax) {
    return x >= minMax[0] && x <= minMax[1];
};
var radialLabelPlacement = exports.radialLabelPlacement = function radialLabelPlacement(angleRadians) {
    var angle = 180 * angleRadians / Math.PI;
    var textAlign = 'center';
    var textBaseline = 'middle';
    var quadrant = 0;
    if (isInRange(angle, [0, 90])) {
        quadrant = 0;
    } else if (isInRange(angle, [90, 180])) {
        quadrant = 1;
    } else if (isInRange(angle, [180, 270])) {
        quadrant = 2;
    } else if (isInRange(angle, [270, 360])) {
        quadrant = 3;
    }
    if (quadrant === 0) {
        textAlign = 'start';
        textBaseline = 'top';
    } else if (quadrant === 1) {
        textAlign = 'end';
        textBaseline = 'top';
    } else if (quadrant === 2) {
        textAlign = 'end';
        textBaseline = 'bottom';
    } else if (quadrant === 3) {
        textAlign = 'start';
        textBaseline = 'bottom';
    }
    var edge = null;
    if (isInRange(angle, [0, 10]) || isInRange(angle, [350, 0])) {
        edge = 0;
    } else if (isInRange(angle, [80, 100])) {
        edge = 1;
    } else if (isInRange(angle, [170, 190])) {
        edge = 2;
    } else if (isInRange(angle, [260, 280])) {
        edge = 3;
    }
    if (edge === 0) {
        textBaseline = 'middle';
    } else if (edge === 1) {
        textAlign = 'center';
    } else if (edge === 2) {
        textBaseline = 'middle';
    } else if (edge === 3) {
        textAlign = 'center';
    }
    return { textAlign: textAlign, textBaseline: textBaseline };
};
},{}],"../../node_modules/element-size/index.js":[function(require,module,exports) {
module.exports = getSize

function getSize(element) {
  // Handle cases where the element is not already
  // attached to the DOM by briefly appending it
  // to document.body, and removing it again later.
  if (element === window || element === document.body) {
    return [window.innerWidth, window.innerHeight]
  }

  if (!element.parentNode) {
    var temporary = true
    document.body.appendChild(element)
  }

  var bounds = element.getBoundingClientRect()
  var styles = getComputedStyle(element)
  var height = (bounds.height|0)
    + parse(styles.getPropertyValue('margin-top'))
    + parse(styles.getPropertyValue('margin-bottom'))
  var width  = (bounds.width|0)
    + parse(styles.getPropertyValue('margin-left'))
    + parse(styles.getPropertyValue('margin-right'))

  if (temporary) {
    document.body.removeChild(element)
  }

  return [width, height]
}

function parse(prop) {
  return parseFloat(prop) || 0
}

},{}],"../../node_modules/canvas-fit-margin-ts/dist/index.js":[function(require,module,exports) {
"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};exports.__esModule=!0;var getSize=require("element-size"),defaultOptions={parent:null,margin:0,scale:1};function createFit(r,e){var t=__assign({},defaultOptions,e),s=t.margin,a=t.scale,o=t.parent;function i(){var e,t,i=o||r.parentNode;if(i&&i!==document.body){var n=getSize(i);e=0|n[0],t=0|n[1]}else e=window.innerWidth,t=window.innerHeight;return e-=2*s,t-=2*s,r.width=e*a,r.height=t*a,r.style.width=e+"px",r.style.height=t+"px",[e,t]}return r.style.position=r.style.position||"relative",r.style.top="0",r.style.left="0",r.style.margin=s+"px",i(),i}exports.createFit=createFit;
},{"element-size":"../../node_modules/element-size/index.js"}],"utils.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pointOnCircle = pointOnCircle;
exports.getTickData = getTickData;
exports.strokeBoundingBox = strokeBoundingBox;
var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function pointOnCircle(angle, radius, center) {
    return [Math.cos(angle) * radius + center[0], Math.sin(angle) * radius + center[1]];
}
function getTickData(ticks, radius, center) {
    return ticks.map(function (tick) {
        var angle = tick.angle * Math.PI;
        var p1 = pointOnCircle(angle, radius, center);
        var p2 = pointOnCircle(angle, radius - 25, center);
        var p3 = pointOnCircle(angle, radius + 15, center);
        return __assign({}, tick, { angle: angle, p1: p1, p2: p2, p3: p3 });
    });
}
function strokeBoundingBox(context, point, width, height, textAlign, textBaseline) {
    context.strokeRect(point[0] + offsetX[textAlign](width), point[1] + offsetY[textBaseline](height), width, height);
}
var offsetX = exports.offsetX = {
    start: function start(w) {
        return 0;
    },
    center: function center(w) {
        return -w / 2;
    },
    end: function end(w) {
        return -w;
    }
};
var offsetY = exports.offsetY = {
    top: function top(h) {
        return 0;
    },
    middle: function middle(h) {
        return -h / 2;
    },
    bottom: function bottom(h) {
        return -h;
    }
};
},{}],"demo.ts":[function(require,module,exports) {
'use strict';

var _ = require('..');

var _canvasFitMarginTs = require('canvas-fit-margin-ts');

var _utils = require('./utils');

var scale = window.devicePixelRatio || 1;
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
var fit = (0, _canvasFitMarginTs.createFit)(canvas, { scale: scale });
document.body.style.margin = '0';
document.body.appendChild(canvas);
var ticks = [{ angle: 0, label: "0", labelOffset: [0, 15] }, { angle: 1 / 4, label: '\u03C0 / 4', labelOffset: [0, 35] }, { angle: 1 / 2, label: '\u03C0 / 2', labelOffset: [0, 35] }, { angle: 3 / 4, label: '3/4 \u03C0', labelOffset: [0, 35] }, { angle: 1, label: '\u03C0', labelOffset: [0, 25] }, { angle: 5 / 4, label: '5/4 \u03C0', labelOffset: [-10, 0] }, { angle: 3 / 2, label: '3/2 \u03C0', labelOffset: [0, -95] }, { angle: 7 / 4, label: '7/4 \u03C0', labelOffset: [0, 0] }];
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
    (0, _utils.getTickData)(ticks, radius, center).forEach(function (tick) {
        context.fillStyle = 'black';
        context.strokeStyle = 'black';
        context.beginPath();
        context.moveTo.apply(context, tick.p1);
        context.lineTo.apply(context, tick.p2);
        context.stroke();
        var _a = (0, _.radialLabelPlacement)(tick.angle),
            textAlign = _a.textAlign,
            textBaseline = _a.textBaseline;
        context.font = '48px monospace';
        context.textAlign = textAlign;
        context.textBaseline = textBaseline;
        context.fillText.apply(context, [tick.label].concat(tick.p3));
        context.fillStyle = '#bbb';
        context.strokeStyle = '#bbb';
        var box = context.measureText(tick.label);
        (0, _utils.strokeBoundingBox)(context, tick.p3, box.width, 48, textAlign, textBaseline);
        context.moveTo.apply(context, tick.p3);
        context.arc(tick.p3[0], tick.p3[1], 4, 0, Math.PI * 2);
        context.fill();
        context.font = '18px monospace';
        context.fillText("textAlign: " + textAlign, tick.p3[0] + tick.labelOffset[0], tick.p3[1] + 22 + tick.labelOffset[1]);
        context.fillText("textBaseline: " + textBaseline, tick.p3[0] + tick.labelOffset[0], tick.p3[1] + 44 + tick.labelOffset[1]);
    });
}
var onResize = function onResize() {
    var _a = fit(),
        width = _a[0],
        height = _a[1];
    render(width, height);
};
window.addEventListener('resize', onResize);
document.onreadystatechange = function () {
    onResize();
};
onResize();
if (module.hot) {
    module.hot.dispose(function () {
        return canvas.remove();
    });
}
},{"..":"../index.ts","canvas-fit-margin-ts":"../../node_modules/canvas-fit-margin-ts/dist/index.js","./utils":"utils.ts"}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '59033' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","demo.ts"], null)
//# sourceMappingURL=/demo.83d47294.map