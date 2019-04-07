class Cell{
  constructor(xCoord, yCoord) {
    this._xCoord = xCoord;
    this._yCoord = yCoord;
    this._adjacents = new Array();
  }

  isPassable() {}

  getCoordinates(){
    return `(${this._xCoord},${this._yCoord})`;
  }

  getX(){
    return this._xCoord;
  }

  getY(){
    return this._yCoord;
  }

  addAdjacent(aCell){
    this._adjacents.push(aCell);
  }

  getAdjacents(){
    return this._adjacents;
  }

  formsSquare(){
    for (let i = 0; i < this._adjacents.length-1; ++i){
      let adjOne = this._adjacents[i].getAdjacents();
      let adjTwo = this._adjacents[i+1].getAdjacents();
      if (intersection(adjOne,adjTwo).length == 2)
        return true;
    }
    return false;
  }
};

export default Cell;

function intersection(groupOne, groupTwo){
   return groupOne.filter(x => groupTwo.includes(x));
}
