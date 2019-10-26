Staff = class {
    constructor(clef) {
        this.clef = clef
    }

    getStaffPosition = function getStaffPosition(coord, clef) {
        if (typeof coord === 'number') {
          clef = coord;
          return function(coord) {
            return getStaffPosition(coord, clef);
          }
        } else if (coord && coord.coord) {
          coord = coord.coord;
        } else if (!coord || !coord.length || (coord && !clef)) {
          return null;
        }
        var pos = coord[0] * 7 + coord[1] * 4 + 29; 
        return (pos - clef) / 2 + 2.5;
    };
}

 
 


