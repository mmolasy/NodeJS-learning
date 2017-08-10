function Shape(boki){
    this._nazwa = "";
    this._boki = boki;
}

Shape.prototype.getObwod = function () {
    return this._boki.reduce(function (preVal, val) {
        return preVal+val;
    });
};

Shape.prototype.getPowierzchnia = function () {
    if(this._boki.length > 2){
        return this._boki[0]*this._boki[1];
    }else{
        return 0;
    }
};

function Rectangle(boki){
    Shape.call(this, [boki[0], boki[1], boki[0], boki[1]]);
    this._nazwa = "Prostokat";
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

function Square(boki){
    Rectangle.call(this, [boki[0], boki[0]]);
    this._nazwa = "Kwadrat";
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

function Triangle(boki){
    Shape.call(this, [boki[0], boki[1], boki[2]]);
    this._nazwa = "Trójkąt";
}

Triangle.prototype = Object.create(Square.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getPowierzchnia = function () {
    return this._boki[0]*this._boki[1]*this._boki[2]/3;
};

var s = new Triangle([10, 10, 10]);
console.log(s.getPowierzchnia());
var s2 = new Rectangle([10, 10]);
console.log(s2.getPowierzchnia());
var s3 = new Square([10]);
console.log(s3.getPowierzchnia());
