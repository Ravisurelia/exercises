(function(){
    $("#clickbutton").on("click", function () {
        var myText = $("#mytext").val(); //my text area and .val will give the value which user is going to write
        try {
            JSON.parse(myText); //to check if the input is JSON or not
            console.log("JSON Valid!! Keep Going!"); // if yes it will show this message
        }catch(err){
            return false, 
            console.log("Entered JSON is not valid!!");// if it is not then will show not valid
        }
        return false;
    });
})();