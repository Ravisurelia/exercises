(function(){
    //console.log("I am linked", $)
    var nextUrl;
    $("#submit-btn").on("click", function(){
        //console.log("button was clicked");
        var userInput = $("input[name=user-input]").val();
        //console.log("userInput:", userInput);
        var albumOrArtist = $("select").val()
        //console.log("albumOrArtist:", albumOrArtist);
        /*we are targeting the input field with the hlep of the 
        name atrribute which will be imprtant for later coding*/
        $.ajax({
            url:'https://elegant-croissant.glitch.me/spotify',
            method: "GET",
            data:{
                query: userInput,
                type: albumOrArtist
            },
            success: function (data){
                //console.log("we are:", data);
                var data = data.albums || data.artists;
                console.log("new data:", data);
                var html = "";
                var imgUrl = "/default.jpg";
                for (var i = 0; i < data.items.length; i++){
                    //console.log("data.items[i]", data.items[i]);
                    //console.log("data.items[i].name", data.items[i].name);

                    if (data.items[i].images[0].url){
                        imgUrl = data.items[i].images[0].url;
                    }
                    html += "<a href=" + data.items[i].external_urls.spotify + ">";
                    html += "<div>" + data.items[i].name + "</div>";
                    html += "<img src=" + imgUrl + ">" + "</a>";
                    
                    
                }
                $("#results-container").html(html);

                if (data.next != null){
                    //console.log("more to come");
                    //we want to make more button appear
                    nextUrl = data.next && data.next.replace('https://api.spotify.com/v1/search', 'https://elegant-croissant.glitch.me/spotify')
                };
                $("#more-btn").css({
                    visibility: "visible",
                }); 
            }
        });  
    });
    //fatching the url for the more so it can show more results by doing the similar method as above
    $("#more-btn").on("click", function(){
        $.ajax({
            url: 'https://elegant-croissant.glitch.me/spotify',
            method: "GET",
            success: function(nextUrl){
                nextUrl = nextUrl.albums || nextUrl.artists;
                //console.log("myNextUrl:", nextUrl);
                var htmlNew = "";
                var imgUrl = "/default.jpg";
                for (var i = 0; i < nextUrl.items.length; i++){
                    //console.log("nextUrl.items.[i], nextUrl.items.[i]);
                    //console.log("nextUrl.items.[i].name", nextUrl.items.[i].name);

                    if (nextUrl.items[i].images.length > 0){
                        imgUrl = nextUrl.items[i].images[0].url;
                    }
                    htmlNew += "<a href=" + nextUrl.items[i].external_urls.spotify + ">";
                    htmlNew += "<img src=" + imgUrl + ">" + "</a>";
                    htmlNew += "<div>" + nextUrl.items[i].name + "</div>";
                    //console.log(htmlNew);

                }
                $("#results-container").html(html + htmlNew);

                /*if (nextUrl.next != null){
                    //console.log("more to come");
                    
                    nextUrl = data.next && data.next.replace('https://api.spotify.com/v1/search', 'https://elegant-croissant.glitch.me/spotify')
                } else {
                    $("#more-btn").hide();
                }
                $("#more-btn").css({
                    visibility: "visible",
                });*/ 
            },
        });
    });
})();

//next step = make all the images in a visible size
//readjust more btn to bottom
// popup message to show after the search
//Again shows CORS errors
// Guess Dillians have sent so many request that it takes too much time for results to appear on the screen