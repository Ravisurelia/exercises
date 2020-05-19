console.log("double check", $);

//ar board = document.getElementById('board');

var jqboard = $("#board");

//var animals = document.getElementsByClassName('animal');
var jqanimals = $(".animals"); 

var animalsLeft = [0, 0, 0, 0];

function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}
/////////////// evenet listener vanilla js
//document.addEventListener('click', function () {
  //  for (var i = 0; i < animalsLeft.length; i++) {
    //    animalsLeft[i] += getRandomNumber(21);
      //  animals[i].style.left = animalsLeft[i] + 'px';
    //}
//});


///////////////// event listener in jquery
jqboard.on("click", function(){
    for (var i = 0; i < animalsLeft.length; i++) {
        animalsLeft[i] += getRandomNumber(21);
        // we are utilizing the .css method to restyling the elements        
        jqanimals
        .eq(i)
        .css({
            left: animalsLeft[i] + "px",
           // backgroundColor: "hotpink",
            //"font-size": 20 + "px",
        })
        //.hide(800)
        //.show(1000);
        .fadeout()
        .fadein();
        
        //toggle "toggles" betwn vsisbility and invisibility upon clicking --> 
        //our event listener is on the click
        //jqanimals.eq(i).toggle(1000);
    } 
});


// document.getElementById('boost-button').addEventListener('click', function (e) {
//     console.log('clicked on boost button!');
//     e.stopPropagation();

//     animalsLeft[0] += 20;
//     animals[0].style.left = animalsLeft[0] + 'px';
// });

///////// jquery boost button
//document.getElementById("boost-button")
$("#boost-button").on("click", function(e) {
    e.stopPropagation();
    animalsLeft[0] += 20;
    //animals[0].style.left = animalsLeft[0] + 'px';

    jqanimals.eq(0).css({
        left: animalsLeft[0] + "px",
    });
});


// document.addEventListener('keydown', function (evt) {
//     if (evt.keyCode === 82) {
//         var r = getRandomNumber(256);
//         var g = getRandomNumber(256);
//         var b = getRandomNumber(256);
//         var randomColor = 'rgb(' + r + ',' + g + ',' + b + ')';
//         console.log(randomColor);
//         board.style.backgroundColor = randomColor;
//         for (var i = 0; i < animalsLeft.length; i++) {
//             animalsLeft[i] += getRandomNumber(21);
//             animals[i].style.left = animalsLeft[i] + 'px';
//         }
//     }
// });
///////////////////////////jquery keydown listner
document.addEventListener
$(document).on("keydown", function(e){
    if (e.keyCode === 82){
        var r = getRandomNumber(256);
        var g = getRandomNumber(256);
        var b = getRandomNumber(256);
        var randomColor = 'rgb(' + r + ',' + g + ',' + b + ')'; 
        jqboard.css({
            "background-color": randomColor,
        });

        for (var i = 0; i < animalsLeft.length; i++) {
            animalsLeft[i] += getRandomNumber(21);
           // animals[i].style.left = animalsLeft[i] + 'px';
            jqanimals.eq(i).css({
                left: animalsLeft[i] + "px",
            });
        }
    
    }
});