function getLessThanZero(x) {
    return x.filter(function(y) {
        return y < 0;
    });
}
console.log(getLessThanZero([-1, -5, 10, 15, 50, -999]));