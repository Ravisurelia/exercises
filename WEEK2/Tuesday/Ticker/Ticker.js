(function () {
    var request;
    var links = sports.querySelectorAll("a");
    var sports = document.getElementById("Sports");
    
    var linksArray = [];

    for (var i = 0; i < links.length; i++) {
        linksArray.push(links[i]);
    }

    for (var k = 0; k < links.length; k++) {
        linksArray[i].addEventListener("mouseover", cancelSlide);
        linksArray[i].addEventListener("mouseout", resumeSlide);
        console.log(linksArray[i]);
    }
    slide();
    function slide() {
        var left = sports.offsetLeft;
        left--;
        sports.style.left = left + "px";
        if (left <= -links[0].offsetWidth) {
            sports.style.left = left + links[0].offsetWidth + "px";
            links[0].parentElement.appendChild(links[0]);
        }
        request = requestAnimationFrame(slide);
    }
    function cancelSlide (event) {
        event.target.style.color = "yellow";
        event.target.style.textDecoration = "underline";
        cancelAnimationFrame(request);
    }
    function resumeSlide (event) {
        event.target.style.color = "white";
        event.target.style.textDecoration = "";
        requestAnimationFrame(slide);
    } 
}());

