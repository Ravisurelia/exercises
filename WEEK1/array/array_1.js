function each(X, callback){
    if (typeof X == "object"){
        if (X == null){
            return "null";
        } else if (Array.isArray(X)){
            for (var i = 0; i < X.length; i++){
                callback(X[i], i);
            }
        } else {
             for (var item of Object.keys(X)){
                 callback(X[item], item);
             }
        }
    } else {
        return "Not an object.";
    }

}
console.log(each);

each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
);