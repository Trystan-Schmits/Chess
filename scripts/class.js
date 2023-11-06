class square{
    constructor(row,column){
        this.row = row;
        this.column = column;
        this.elementId = String(row)+","+String(column);
    }
    returnId(){
        return this.elementId;
    }
}

export {square};