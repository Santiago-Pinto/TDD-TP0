import Cell from './Cell'

class PassableCell extends Cell{
  constructor(xCoord, yCoord){
    super(xCoord, yCoord);
  }

  isPassable() {return true;}
};

export default PassableCell;
