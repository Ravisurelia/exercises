(function(){
    //console.log("I am linked", $)
    var moreUrl;
    var baseUrl = 'https://spicedify.herokuapp.com/spotify';
    var html = "";
    var htmlNew = "";
    $("#submit-btn").on("click", function(){
        //console.log("button was clicked");
        var userInput = $("input[name=user-input]").val();
        //console.log("userInput:", userInput);
        var albumOrArtist = $("select").val()
        //console.log("albumOrArtist:", albumOrArtist);
        /*we are targeting the input field with the hlep of the 
        name atrribute which will be imprtant for later coding*/
        $.ajax({
            url: baseUrl,
            method: "GET",
            data:{
                query: userInput,
                type: albumOrArtist
            },
            success: function (data){
                //console.log("we are:", data);
                var data = data.albums || data.artists;
                console.log("new data:", data);
                generateResultsHtml(data.items);
                /*var imgUrl = "/default.jpg";
                for (var i = 0; i < data.items.length; i++){
                    //console.log("data.items[i]", data.items[i]);
                    //console.log("data.items[i].name", data.items[i].name);

                    if (data.items[i].images[0].url){
                        imgUrl = data.items[i].images[0].url;
                    }
                    html += "<a href=" + data.items[i].external_urls.spotify + ">";
                    html += "<div>" + data.items[i].name + "</div>";
                    html += "<img src=" + imgUrl + ">" + "</a>";
                    
                    
                }*/
                //creating message popup for the searched results
                if (data.items.length === 0){
                    $("#displaymessage").html("<p>No results found for" + userInput + "</p>");
                } else {
                    $("#displaymessage").html("<p>Results found for" + userInput + "</p>");

                }

                $("#results-container").html(html);
                setNextUrl(data.next);


                /*if (data.next != null){
                    //console.log("more to come");
                    //we want to make more button appear
                    moreUrl = data.next && data.next.replace('https://api.spotify.com/v1/search', baseUrl);
                }
                $("#more-btn").css({
                    visibility: "visible",
                });*/ 
            }
        });  
    });
    //fatching the url for the more so it can show more results by doing the similar method as above
    $("#more-btn").on("click", function(){
        $.ajax({
            url: moreUrl,
            method: "GET",
            success: function(nextUrl){
                nextUrl = nextUrl.albums || nextUrl.artists;
                //console.log("myNextUrl:", nextUrl);
                generateResultsHtml(nextUrl.items);
                /*var imgUrl = "/default.jpg";
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

                }*/
                $("#results-container").html(html + htmlNew);

                /*if (nextUrl.next != null){
                    //console.log("more to come");
                    //we want to make more button appear
                    moreUrl = nextUrl.next && nextUrl.next.replace('https://api.spotify.com/v1/search', baseUrl);
                }*/
                setNextUrl(nextUrl.next);
                

                
            },
        });
    });

    function setNextUrl(nextUrl){
        console.log("our next url:", nextUrl);
        if (nextUrl.next != null){
            //console.log("more to come");
            //we want to make more button appear
            moreUrl = nextUrl && nextUrl.replace('https://api.spotify.com/v1/search', baseUrl);
            $("#more-btn").addClass("hidden");
        } 
    }

    function generateResultsHtml (spotifyData){
        var imgUrl = "/default.jpg";
        for (var i = 0; i < spotifyData.items.length; i++){
            if (spotifyData.items[i].images[0].url){
                imgUrl = spotifyData.items[i].images[0].url;
            }
            html += "<a href=" + spotifyData.items[i].external_urls.spotify + ">";
            html += "<div>" + spotifyData.items[i].name + "</div>";
            html += "<img src=" + imgUrl + ">" + "</a>";         
        }
    }
    //after calling the spotify API and we have got the results 
    if (location.search.indexOf("scroll=infinite")>0){
        // we want to do infinite scroll
        $(window).scrollTop();
        //in Vanilla js wondow.pageYOffset
        $(window).height();
        //in Vanilla js wondow.innerHeight
        $(document).height();//height  of the whole document
        //in Vanilla js document.body.clientHeight
    }

    /*var reachedBottom;
    
    if (scrollTop === 0){
        setNextUrl();
    }else {
        setTimeOut(function infiniteCheck(){

        },5000);
        //if reachedBottom is true
        //you want to go to spotify and get more data
        //if user has not reached to the bottom you want to settimeout and pass the infinitecheck function and number of milisecons we want to it to check
    }*/
    
})();

//next step = make all the images in a visible size
//readjust more btn to bottom
// popup message to show after the search
//Again shows CORS errors
// Guess Dillians have sent so many request that it takes too much time for results to appear on the screen