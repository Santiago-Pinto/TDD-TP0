import Cell from './Cell'
import CellFactory from './CellFactory'

class Parser {
    constructor(impassableTypes){
        this._impassableTypes = impassableTypes;
    }

    parse(mazeCells){
        let cells = new Array();
        for (let x = 0; x < mazeCells.length ; ++x) {
          for (let y = 0; y < mazeCells[x].length; ++y) {
                let type = mazeCells[x][y];
                cells.push(CellFactory.create(type,this._impassableTypes,x,y));
          }
        }
        setAdjacents(cells);
        return cells;
    }
}

function setAdjacents(cells){
  let passableCells = cells.filter(function(aCell){return aCell.isPassable()})
  for (let x = 0; x < passableCells.length; ++x){
    for (let y = 0; y < passableCells.length; ++y){
      let dx = Math.abs(passableCells[x].getX() - passableCells[y].getX());
      let dy = Math.abs(passableCells[x].getY() - passableCells[y].getY());
      if ((dx + dy == 1))
        passableCells[x].addAdjacent(passableCells[y]);
    }
  }
}

export default Parser;
