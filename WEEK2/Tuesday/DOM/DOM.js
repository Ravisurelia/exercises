// exercise 1-------------------

function input(parameter) {
    var doc = document.querySelectorAll(parameter);
    console.log(doc);

    for (var i = 0; i < parameter.length; i++);{
        parameter[i].style.fontStyle = "italic";
        parameter[i].style.textDecoration = "underline";
        parameter[i].style.fontWeight = "bold";
    }
}
console.log(input("li"));


// exercise 2-------------------

function input(classname) {
    var array = [];

    var ele = document.getElementsByClassName(classname);

    for ( var i = 0; i < ele.length; i++) {
        array.push(ele[i]);    
    }
    return array;
}

var myLiArray = input("list-item");
console.log(myLiArray);


// exercise 3-------------------

function insertElement() {
    var input = document.createElement("nav");

    input.style = "position: fixed; left: 20px; top: 100px";
    input.style = "z-index: 2147483647";
    input.style.fontSize = "200px";

    var text = document.createTextNode("AWESOME");
    input.appendChild(text);
    document.querySelector("body").appendChild(input);
}
console.log(insertElement());
