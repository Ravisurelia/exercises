var input = $("#mytext");
var myButton = $("#clickbutton");
var clickedResults = input.val();
console.log(clicked);

myButton.on("click", function(){
    try{
        localStorage.setItem("input", clickedResults );
        //console.log(localStorage.getItem("input"));
    }catch(e){
        console.log("FAILED");
    }   
});