(function () {
  $.ajax({
    url: "/data.json",
    method: "GET",
    success: function (response) {
      var myHtmlLinks = "";
      for (var i = 0; i < response.length; i++) {
        console.log(response[i]);
        var newLinks = response[i];
        var newHtmlLinks =
          "<a href=" +
          newLinks.href +
          " class='sportsNewsLink'>" +
          newLinks.text +
          "</a>";
        myHtmlLinks += newHtmlLinks;
      }
      $("#container").html(myHtmlLinks);
      console.log("myhtml", response);

      var request;
      var newsLink = $(".sportsNewsLink"); //by class
      var sportsNews = $("#container");
      //var sports = document.getElementById("Sports");
      //var links = sports.getElementsByTagName("a");
      var linksArray = [];

      for (var i = 0; i < newsLink.length; i++) {
        linksArray.push(newsLink[i]);
      }
      console.log("this is my linksarray: ", linksArray);

      var newLinksArray = $(linksArray);
      console.log("this is my newwwwwwwwwwwwwwwwarray: ", newLinksArray);

      for (var k = 0; k < newLinksArray.length; k++) {
        //linksArray[i].addEventListener("mouseover", cancelSlide);
        $(newLinksArray.eq(i)).on("mouseover", cancelSlide);
        //linksArray[i].addEventListener("mouseout", resumeSlide);
        $(newLinksArray.eq(i)).on("mouseout", resumeSlide);
        ///getting some problem here
      }

      var counter = 0;
      slide();
      function slide() {
        var left = sportsNews.offset().left;
        left--;
        console.log("this is my left: ", left);

        sportsNews.css({
          left: left + "px",
        });
        if (left <= -newLinksArray.eq(counter).outerwidth) {
          sportsNews.css({
            left: left + newLinksArray.eq(counter).outerwidth + "px",
          });
          console.log("here is my Sports news css: ", sportsNews);

          newLinksArray.eq(counter).parent().append(newLinksArray.eq(counter));
          if (++counter == newLinksArray.length) {
            counter = 0;
          }
        }
        request = requestAnimationFrame(slide);
      }
      function cancelSlide(event) {
        //event.target.style.color = "yellow";
        //event.target.style.textDecoration = "underline";
        $(event.target).css({
          color: "yellow",
          textDecoration: "underline",
        });
        cancelAnimationFrame(request);
      }
      function resumeSlide(event) {
        //event.target.style.color = "white";
        //event.target.style.textDecoration = "";
        $(event.target).css({
          color: "white",
          textDecoration: "",
        });
        requestAnimationFrame(slide);
      }
    },
    error: function (err) {
      console.log("err", err);
    },
  });
})();

////getting a CORS error i treid to solve it but i could not able to do it!
