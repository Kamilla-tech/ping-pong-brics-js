
export default class Bricks {
    constructor ({
        numRows = 4,
        numCols = 7,
        brickWidth = 60,
        brickHeight = 20,
        brickGap = 10,
        brickMarginTop = 30,
        brickMarginLeft = 20
    } = {}) {
        this.numRows = numRows;
        this.numCols = numCols;
        this.brickWidth = brickWidth;
        this.brickHeight = brickHeight;
        this.brickGap = brickGap;
        this.brickMarginTop = brickMarginTop;
        this.brickMarginLeft = brickMarginLeft;
        
    }
}