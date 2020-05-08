function sum() {
    var s = 0;
    for (var i=0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
 
console.log(sum(2, 3, 5, 6, 11, 10, 50)); 