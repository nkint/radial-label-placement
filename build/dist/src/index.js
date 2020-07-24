"use strict";
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
exports.__esModule = true;
exports.radialLabelPlacement = void 0;
var utils_1 = require("./utils");
exports.radialLabelPlacement = function (angleRadians) {
    var angle = utils_1.mod(utils_1.radToDeg(angleRadians), 360);
    var textAlign = 'center';
    var textBaseline = 'middle';
    var quadrant = 0;
    if (utils_1.isInRange(angle, [0, 90])) {
        quadrant = 0;
    }
    else if (utils_1.isInRange(angle, [90, 180])) {
        quadrant = 1;
    }
    else if (utils_1.isInRange(angle, [180, 270])) {
        quadrant = 2;
    }
    else if (utils_1.isInRange(angle, [270, 360])) {
        quadrant = 3;
    }
    if (quadrant === 0) {
        textAlign = 'start';
        textBaseline = 'top';
    }
    else if (quadrant === 1) {
        textAlign = 'end';
        textBaseline = 'top';
    }
    else if (quadrant === 2) {
        textAlign = 'end';
        textBaseline = 'bottom';
    }
    else if (quadrant === 3) {
        textAlign = 'start';
        textBaseline = 'bottom';
    }
    var edge = null;
    if (utils_1.isInRange(angle, [0, 10]) || utils_1.isInRange(angle, [350, 0])) {
        edge = 0;
    }
    else if (utils_1.isInRange(angle, [80, 100])) {
        edge = 1;
    }
    else if (utils_1.isInRange(angle, [170, 190])) {
        edge = 2;
    }
    else if (utils_1.isInRange(angle, [260, 280])) {
        edge = 3;
    }
    if (edge === 0) {
        textBaseline = 'middle';
    }
    else if (edge === 1) {
        textAlign = 'center';
    }
    else if (edge === 2) {
        textBaseline = 'middle';
    }
    else if (edge === 3) {
        textAlign = 'center';
    }
    return { textAlign: textAlign, textBaseline: textBaseline };
};
//# sourceMappingURL=index.js.map