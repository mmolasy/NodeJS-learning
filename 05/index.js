// const path = require("path");
// const utils = require("util");
//
// var log = utils.format("Nazwa pliku to %s", path.basename(__filename));
// console.log(log);

function Person(imie, nazwisko){
    this.imie = imie;
    this.nazwisko = nazwisko;
}

Person.prototype.sayHello = function() {
    return "Hej "+this.imie+" "+this.nazwisko;
};

var osoba = new Person("Mateusz", "Molasy");
console.log(osoba);
console.log(osoba.sayHello());