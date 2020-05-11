//1st Exercise

function Ractangle(w, h) {
    this.width = w;
    this.height = h;
    this.getArea = function () {
        return this.width * this.height;
    };
}

function Square(num) {
    this.width = num;
    this.height = num;
}
    

Square.prototype = new Ractangle();

var anotherRactangle = new Ractangle(10, 20);
console.log(anotherRactangle.getArea());

var anotherSqaure = new Square (10);
console.log(anotherSqaure.getArea(10));




// 2nd Exercise

function invertCase(str) {
    var output = "";

    for ( var i = 0; i < str.length; i++)

        var char = str[i];

    if (char === char.toUpperCase()) {
        output += char.toLowerCase();
    } else {
        output += char.toUpperCase();
    }
    return output;    
}
console.log("This is Fun")
console.log(invertCase("THIS IS FUN"));
console.log(invertCase("this is fun"));