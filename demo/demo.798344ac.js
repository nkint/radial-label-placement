parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"o2+O":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e,t){return e>=t[0]&&e<=t[1]},t=exports.radialLabelPlacement=function(t){var r=180*t/Math.PI,n="center",a="middle",l=0;e(r,[0,90])?l=0:e(r,[90,180])?l=1:e(r,[180,270])?l=2:e(r,[270,360])&&(l=3),0===l?(n="start",a="top"):1===l?(n="end",a="top"):2===l?(n="end",a="bottom"):3===l&&(n="start",a="bottom");var o=null;return e(r,[0,10])||e(r,[350,0])?o=0:e(r,[80,100])?o=1:e(r,[170,190])?o=2:e(r,[260,280])&&(o=3),0===o?a="middle":1===o?n="center":2===o?a="middle":3===o&&(n="center"),{textAlign:n,textBaseline:a}};
},{}],"BjvI":[function(require,module,exports) {
function e(e){if(e===window||e===document.body)return[window.innerWidth,window.innerHeight];if(!e.parentNode){var r=!0;document.body.appendChild(e)}var n=e.getBoundingClientRect(),o=getComputedStyle(e),i=(0|n.height)+t(o.getPropertyValue("margin-top"))+t(o.getPropertyValue("margin-bottom")),d=(0|n.width)+t(o.getPropertyValue("margin-left"))+t(o.getPropertyValue("margin-right"));return r&&document.body.removeChild(e),[d,i]}function t(e){return parseFloat(e)||0}module.exports=e;
},{}],"d9wR":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};exports.__esModule=!0;var t=require("element-size"),r={parent:null,margin:0,scale:1};function n(n,i){var s=e({},r,i),a=s.margin,o=s.scale,l=s.parent;function p(){var e,r,i=l||n.parentNode;if(i&&i!==document.body){var s=t(i);e=0|s[0],r=0|s[1]}else e=window.innerWidth,r=window.innerHeight;return e-=2*a,r-=2*a,n.width=e*o,n.height=r*o,n.style.width=e+"px",n.style.height=r+"px",[e,r]}return n.style.position=n.style.position||"relative",n.style.top="0",n.style.left="0",n.style.margin=a+"px",p(),p}exports.createFit=n;
},{"element-size":"BjvI"}],"UnXq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pointOnCircle=n,exports.getTickData=r,exports.strokeBoundingBox=e;var t=function(){return(t=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function n(t,n,r){return[Math.cos(t)*n+r[0],Math.sin(t)*n+r[1]]}function r(r,e,o){return r.map(function(r){var u=r.angle*Math.PI,i=n(u,e,o),c=n(u,e-25,o),s=n(u,e+15,o);return t({},r,{angle:u,p1:i,p2:c,p3:s})})}function e(t,n,r,e,i,c){t.strokeRect(n[0]+o[i](r),n[1]+u[c](e),r,e)}var o=exports.offsetX={start:function(t){return 0},center:function(t){return-t/2},end:function(t){return-t}},u=exports.offsetY={top:function(t){return 0},middle:function(t){return-t/2},bottom:function(t){return-t}};
},{}],"EWEi":[function(require,module,exports) {
"use strict";var e=require(".."),l=require("canvas-fit-margin-ts"),t=require("./utils"),a=window.devicePixelRatio||1,n=document.createElement("canvas"),o=n.getContext("2d"),i=(0,l.createFit)(n,{scale:a});document.body.style.margin="0",document.body.appendChild(n);var s=[{angle:0,label:"0",labelOffset:[0,15]},{angle:.25,label:"π / 4",labelOffset:[0,35]},{angle:.5,label:"π / 2",labelOffset:[0,35]},{angle:.75,label:"3/4 π",labelOffset:[0,35]},{angle:1,label:"π",labelOffset:[0,25]},{angle:5/4,label:"5/4 π",labelOffset:[-10,0]},{angle:1.5,label:"3/2 π",labelOffset:[0,-95]},{angle:7/4,label:"7/4 π",labelOffset:[0,0]}];function f(l,a){var i=.6*Math.min(l,a),f=[n.width/2,n.height/2];o.fillStyle="black",o.strokeStyle="black",o.arc(f[0],f[1],i,0,2*Math.PI),o.stroke(),o.save(),o.translate.apply(o,f),o.beginPath(),o.moveTo(-10,0),o.lineTo(10,0),o.stroke(),o.moveTo(0,-10),o.lineTo(0,10),o.stroke(),o.restore(),(0,t.getTickData)(s,i,f).forEach(function(l){o.fillStyle="black",o.strokeStyle="black",o.beginPath(),o.moveTo.apply(o,l.p1),o.lineTo.apply(o,l.p2),o.stroke();var a=(0,e.radialLabelPlacement)(l.angle),n=a.textAlign,i=a.textBaseline;o.font="48px monospace",o.textAlign=n,o.textBaseline=i,o.fillText.apply(o,[l.label].concat(l.p3)),o.fillStyle="#bbb",o.strokeStyle="#bbb";var s=o.measureText(l.label);(0,t.strokeBoundingBox)(o,l.p3,s.width,48,n,i),o.moveTo.apply(o,l.p3),o.arc(l.p3[0],l.p3[1],4,0,2*Math.PI),o.fill(),o.font="18px monospace",o.fillText("textAlign: "+n,l.p3[0]+l.labelOffset[0],l.p3[1]+22+l.labelOffset[1]),o.fillText("textBaseline: "+i,l.p3[0]+l.labelOffset[0],l.p3[1]+44+l.labelOffset[1])})}var r=function(){var e=i();f(e[0],e[1])};window.addEventListener("resize",r),document.onreadystatechange=function(){r()},r(),module.hot&&module.hot.dispose(function(){return n.remove()});
},{"..":"o2+O","canvas-fit-margin-ts":"d9wR","./utils":"UnXq"}]},{},["EWEi"], null)
//# sourceMappingURL=/demo.798344ac.map