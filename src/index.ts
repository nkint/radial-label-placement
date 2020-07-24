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

import { radToDeg, mod, isInRange } from './utils'

export const radialLabelPlacement = (angleRadians: number) => {
  const angle = mod(radToDeg(angleRadians), 360)

  let textAlign: 'center' | 'end' | 'start' = 'center'
  let textBaseline: 'top' | 'middle' | 'bottom' = 'middle'

  let quadrant = 0

  if (isInRange(angle, [0, 90])) {
    quadrant = 0
  } else if (isInRange(angle, [90, 180])) {
    quadrant = 1
  } else if (isInRange(angle, [180, 270])) {
    quadrant = 2
  } else if (isInRange(angle, [270, 360])) {
    quadrant = 3
  }

  if (quadrant === 0) {
    textAlign = 'start'
    textBaseline = 'top'
  } else if (quadrant === 1) {
    textAlign = 'end'
    textBaseline = 'top'
  } else if (quadrant === 2) {
    textAlign = 'end'
    textBaseline = 'bottom'
  } else if (quadrant === 3) {
    textAlign = 'start'
    textBaseline = 'bottom'
  }

  let edge = null

  if (isInRange(angle, [0, 10]) || isInRange(angle, [350, 0])) {
    edge = 0
  } else if (isInRange(angle, [80, 100])) {
    edge = 1
  } else if (isInRange(angle, [170, 190])) {
    edge = 2
  } else if (isInRange(angle, [260, 280])) {
    edge = 3
  }

  if (edge === 0) {
    textBaseline = 'middle'
  } else if (edge === 1) {
    textAlign = 'center'
  } else if (edge === 2) {
    textBaseline = 'middle'
  } else if (edge === 3) {
    textAlign = 'center'
  }

  return { textAlign, textBaseline }
}
