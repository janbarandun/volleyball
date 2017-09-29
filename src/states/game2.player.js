export default class Player {

    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    position() {
        return {x:this.x,y:this.y}
    }

    dimensions() {
        return {width:this.width,height:this.height}
    }

}