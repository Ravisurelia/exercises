//Make a page that has on it an element that is 100px by 100px in size and has a solid black border. 
//When the user mouses down on this box, its background should change to a randomly selected color. 
//When the user mouses up on it, its background should change to another randomly selected color.

(function (){

    var emptyBox = document.querySelector("div");

    function anyRandomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        var colouredBox = "rgb("+r+","+g+","+b+")";
        return colouredBox;
    }
    function randomlyChnagedColor () {
        emptyBox.style.backgroundColor = anyRandomColor();
    }

    emptyBox.addEventListener("mouseup", randomlyChnagedColor);
    emptyBox.addEventListener("mousedown", randomlyChnagedColor);

})();














