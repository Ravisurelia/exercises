function logType(val) {
    var type = typeof val;
    if (type == "number") {
        if (val != val) {
            console.log("not a number!");
        } else {
            console.log("number!");
        }
    } else if (type == "undefined") {
        console.log(type + "!");
    } else if (type == "string") {
        console.log(type + "!");
    } else if (type == "boolean") {
        console.log(type + "!");
    } else if (type == "bigint") {
        console.log(type + "!");
    } else if (type == "function") {
        console.log(type + "!");
    } else if (type == "object") {
        if (val === null) {
            console.log("null!");
        } else if (Array.isArray(val)) {
            console.log("array!");
        } else {
            console.log("object!");
        } 
    }

}
logType(25n);