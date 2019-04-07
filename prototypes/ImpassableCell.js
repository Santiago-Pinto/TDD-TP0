import Cell from './Cell'

class ImpassableCell extends Cell{
  constructor(xCoord, yCoord){
    super(xCoord, yCoord);
  }

  isPassable() {return false;}
};

export default ImpassableCell;
