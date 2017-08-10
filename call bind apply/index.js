function Name(name){
    this.name = name;
}

function sum(a, b, c){
    console.log(a+b+c);
    console.log(this.name);
}

/*
sum.call(this, 1, 2, 3);
sum.apply(this, [1, 2, 3]);
*/


var name = new Name("Mati");
var name2 = new Name("Gosia");

//sum.call(name, 1, 2, 3);
//sum.apply(name2, [1, 2, 3]);

var sumBind = sum.bind(name);

//sumBind(1,1,1);

function bind(fn, obj){

    var args = Array.prototype.slice.call(arguments, 2, arguments.length);

    console.log(args);

    return function () {
        fn.apply(obj, args);
    }
};

var x = bind(sum, name2, 1, 2, 3);

x();
