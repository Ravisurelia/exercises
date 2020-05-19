(function () {
    var qRequest;

    //var sports = document.getElementById("Sports");
    var qSports = $("#Sports");
    //var links = sports.getElementsByTagName("a");
    var qLinks = $("a");
    //var linksArray = [];
    var qLinksArray = [];

    for (var i = 0; i < qLinks.length; i++) {
        qLinksArray.push(qLinks[i]);
    }

    for (var k = 0; k < qLinks.length; k++) {
        qLinksArray[i].addEventListener("mouseover", cancelSlide);
        qLinksArray[i].addEventListener("mouseout", resumeSlide);
        console.log(qLinksArray[i]);
    }
    
    slide();
    function slide() {
        //var left = sports.offsetLeft;
        var qLeft = qSports.offset().Left;
        qLeft--;
        //sports.style.left = left + "px";
        qSports.css({
            left: qSports + "px",
        });

        if (qLeft <= -qLinks[0].outerwidth()) {
            qSports.style.qLeft = qLeft + qLinks[0].outerwidth + "px";
            qLinks[0].parent.append(qLinks[0]);
        }
        qRequest = requestAnimationFrame(slide);
    }
    function cancelSlide (event) {
        //event.target.style.color = "yellow";
        event.target.css({
            color: "yellow",
        });
        //event.target.style.textDecoration = "underline";
        event.target.css({
            "text-decoration": "underline",
        });
        cancelAnimationFrame(qRequest);
    }
    function resumeSlide (event) {
        //event.target.style.color = "white";
        event.target.css({
            color: "white",
        });
        //event.target.style.textDecoration = "";
        event.target.css({
            "text-decoration": "",
        });
        requestAnimationFrame(slide);
    } 
}());

