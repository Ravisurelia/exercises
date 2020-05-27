(function(){
    //var countries = [ "Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla", "Antigua", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire (Netherlands Antilles)", "Bosnia Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo, The Democratic Republic of", "Cook Islands", "Costa Rica", "Croatia", "Curacao (Netherlands Antilles)", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iraq", "Ireland (Republic of)", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kosrae Island", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Macau", "Macedonia (FYROM)", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Moldova", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Ponape", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Rota", "Russia", "Rwanda", "Saba (Netherlands Antilles)", "Saipan", "Samoa", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "South Africa", "South Korea", "Spain", "Sri Lanka", "St. Barthelemy", "St. Croix", "St. Eustatius (Netherlands Antilles)", "St. John", "St. Kitts and Nevis", "St. Lucia", "St. Maarten (Netherlands Antilles)", "St. Thomas", "St. Vincent and the Grenadines", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tinian", "Togo", "Tonga", "Tortola", "Trinidad and Tobago", "Truk", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos", "Tuvalu", "US Virgin Islands", "Uganda", "Ukraine", "Union Island", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Gorda", "Wallis and Futuna", "Yap", "Yemen", "Zambia", "Zimbabwe" ]
    var inputField = $("input");
    //console.log("inputField: ", inputField);
    var countriesContainer = $(".countries-container");
    //console.log("countriesContainer:", countriesContainer);

    inputField.on("input", function(){
        //console.log("input is running!");
        var results = []; //to store the countries that user has ut in the input box
        //1. capture what user is typing
        var userInput = inputField.val();
        //console.log(userInput);
        $.ajax({
            url: 'https://flame-egg.glitch.me/',//can also add "?q=a at the end .
            data: "q=" + userInput,
            success: function(response) {
                console.log(response, userInput);
                if (userInput > 0){
                    countriesContainer.show();
                } else {
                    countriesContainer.hide();
                }
                
            },
            error: function (error) {
                console.log("error:", error);
            },
        });
        //2. grab the countries from the array that matches the uers's input
        /*
        for ( var i = 0; i < countries.length; i++){
            //console.log("countries[i]", countries[i]);
            if (countries[i].toLowerCase().indexOf(userInput.toLowerCase()) === 0){
                //console.log("countries[i]:", countries[i]);
                results.push(countries[i]);
            } 
            if (results.length === 4){
                break;
            }
            
        }*/// for loop ends here
        //console.log("results:", results); //this returns the array of 4 countries 
        
        //3. take those countries and append them to the DOM
        var htmlToDom = "";

        for ( var i = 0; i < countriesContainer.length; i++) {
            htmlToDom += "<p>" + countriesContainer[i] + "</p>";
        }

        //console.log("htmlToDom:", htmlToDom);
        countriesContainer.html(htmlToDom);  
        
        function noResponse(){
            var doesNotMatch = 0;
            if (userInput === ""){
                countriesContainer.hide();
            } else if (doesNotMatch != htmlToDom) {
                countriesContainer.html("<p class='no-result'>No result!</p>");
            } else {
                countriesContainer.show();
            }
        }
        noResponse();

    });

    //highlighted mouseover mousedown

    countriesContainer.on("mouseover", "p", function(e){
        $(e.target).addClass("highlighted");

    });

    countriesContainer.on("mouseout", "p", function(e){
        $(e.target).removeClass("highlighted");

    });


    function selectedCountry() {
        $(".countriesContainer p").on("mousedown", function (e) {
            e.preventDefault();
            if (e.target.nodeName === "p") {
                var text = $(e.target)[0].innerText;
                inputField.val(text);
                countriesContainer.empty();
            }
        });
    }
    selectedCountry();
    //selectedCountry();

    //keypress
    inputField.on("keydown", function(e){
        var firstInputResult = $("p:first-child");
        var lastInputResult = $("p:last-child");
        if (countriesContainer.hasclass("highlighted")){
            countriesContainer.find(firstInputResult).addClass("highlighted");
        }
        if (event.keyCode === 38){
            if (countriesContainer.hasclass("highlighted")){
                countriesContainer.find("p:last-child").addClass("highlighted");
            }
        }
        if (event.keyCode === 40){
            countriesContainer.find("p:first-child").addClass("highlighted");
        }
        if (!lastInputResult.hasclass("highlighted")){
            console.log(lastInputResult);
        }
    });
})();