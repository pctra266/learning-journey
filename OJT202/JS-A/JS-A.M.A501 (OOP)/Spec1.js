class Vec{
    x ;
    y ;
    length;
    constructor(x,y){
        this.x = x;
        this.y = y;
       this.length= Math.sqrt(x**2 + y**2)
    }
    plus(vec) {
        let x = this.x + vec.x;
        let y = this.y + vec.y;
        return new Vec(x,y);
    }

    minus(vec){
        let x = this.x - vec.x;
        let y = this.y - vec.y;
        return new Vec(x,y);
    }
}

// console.log(new Vec(1,2).plus(new Vec(2,3)));
// console.log(new Vec(1,2).minus(new Vec(2,3)));
// console.log(new Vec(3,4).length);