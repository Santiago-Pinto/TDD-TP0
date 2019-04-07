class Maze {
  constructor(cells){
    this._cells = cells;
  }

  getPassableCells(){
    return this._cells.filter(function(aCell){return aCell.isPassable()});
  }

  validate(){
    let passableCells = this.getPassableCells();
    if (!hasTwoPassableCells(passableCells)) {
      return "No contiene 2 celdas transitables";
    }
    if(!everyCellHasTwoConnections(passableCells)){
      return "Hay celdas que no tienen 2 adyacentes";
    }
    if(hasDoubleTrack(passableCells)){
      return "Hay celdas a las que se puede retornar en 4 movimientos sin " +
              "repetir celdas";
    }
    return "Laberinto valido";
  }
}


function hasTwoPassableCells(cells){
  return (cells.length >= 2);
}

function everyCellHasTwoConnections(cells){
  for (let i = 0; i < cells.length; ++i){
    if (cells[i].getAdjacents().length < 2)
      return false;
  }
  return true;
}

function hasDoubleTrack(cells){
  for (let i = 0; i < cells.length; ++i){
    if (cells[i].formsSquare())
      return true;
  }
  return false;
}

export default Maze;
