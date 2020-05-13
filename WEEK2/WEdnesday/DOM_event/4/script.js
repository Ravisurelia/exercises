(function () {
    var bigBox = document.getElementById("outerbox");
    var smallBox = document.getElementById("innerbox");

    function anyRandomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        var colouredBox = "rgb("+r+","+g+","+b+")";
        return colouredBox;
    }
    function randomlyChnagedColor () {
        event.target.style.backgroundColor = anyRandomColor();
    }

    bigBox.addEventListener("click", randomlyChnagedColor);
    smallBox.addEventListener("click", randomlyChnagedColor);
})();

