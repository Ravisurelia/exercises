function million(val){
    if (typeof val === "number") {
        if (val >= 1000000){
            return val;
        }
        if (val < 1000000){
            while (val < 1000000){
                val *= 10;
            }
            return val;
        }
        if (val <= 0 || isNaN(val)) {
            return "ERROR";
        }
    } else {
        return "ERROR";
    }
}
console.log(million("hallo"));