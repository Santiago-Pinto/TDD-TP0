import PassableCell from './PassableCell'
import ImpassableCell from './ImpassableCell'

class CellFactory {
    static create (cellType,impassableTypes,xCoord,yCoord) {
        if (impassableTypes.includes(cellType))
          return new ImpassableCell(xCoord,yCoord);
        return new PassableCell(xCoord, yCoord);
    }
}

export default CellFactory;
