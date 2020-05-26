(function () {
    
    $.ajax({
        url: "/data.json",
        method: "GET",
        success: function(response){
            var myHtmlLinks = '';
            for (var i = 0; i < response.length; i++) {
                // console.log(response[i]);
                var newLinks = response[i];
                var newHtmlLinks = "<a href='" + newLinks.href + "'> " + newLinks.text + "</a>";
                myHtmlLinks += newHtmlLinks;
            }
            $("#Sports").html(myHtmlLinks);
            console.log("myhtml", response);
        }, 
        error: function (err) {
            console.log('err', err); 
        },
    });
    
    var request;
    var newsLink = $("a");
    var sportsNews = $("#Sports");
    //var sports = document.getElementById("Sports");
    //var links = sports.getElementsByTagName("a");
    var linksArray = [];
    var counter = 0;

    for (var i = 0; i < newsLink.length; i++) {
        linksArray.push(newsLink[i]);
    }
    var newLinksArray = (linksArray);

    for (var k = 0; k < newsLink.length; k++) {
        //linksArray[i].addEventListener("mouseover", cancelSlide);
        $(newLinksArray.eq(i)).on("mouseover", cancelSlide);
        //linksArray[i].addEventListener("mouseout", resumeSlide);
        $(newLinksArray.eq(i)).on("mouseout", resumeSlide);
        console.log(linksArray[i]);
    }
    slide();
    function slide() {
        //var left = sportsNews.offsetLeft;
        //left--;
        //sports.style.left = left + "px";
        var left = sportsNews.offset().Left;
        left--;
        sportsNews.css({
            left: left + "px",
        });
        if (left <= -newsLink.eq(counter).outerwidth(true)) {
            sportsNews.css ({left: left + newsLink.eq(counter).outerwidth(true) + "px",});
            newsLink.eq(counter).parent().append(newsLink.eq(counter));
            
        }
        request = requestAnimationFrame(slide);
    }
    function cancelSlide (event) {
        //event.target.style.color = "yellow";
        //event.target.style.textDecoration = "underline";
        $(event.target).css({
            color: "yellow",
            textDecoration: "underline",
        });
        cancelAnimationFrame(request);
    }
    function resumeSlide (event) {
        //event.target.style.color = "white";
        //event.target.style.textDecoration = "";
        $(event.target).css({
            color: "white",
            textDecoration: "",
        });
        requestAnimationFrame(slide);
    } 
}());

////getting a CORS error i treid to solve it but i could not able to do it!