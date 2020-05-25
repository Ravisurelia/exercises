(function(){
    
    var deutscheNummer = {
        1: "eines",
        2: "zwei",
        3: "drei",
        4: "vier",
        5: "fünf",
        6: "sechs",
        7: "sieben",
        8: "acht",
        9: "neun",
        10: "zehn",
    };
    function translateNumberToGerman(){
        try{
            return (deutscheNummer[askForNumber]);
        }catch (e){
            console.log(e.message);
            return translateNumberToGerman();
        }
    };
    
    function askForNumber() {
        var num = prompt('Please enter a number between 1 and 10');
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error('Bad number');
    }

    translateNumberToGerman();
})();