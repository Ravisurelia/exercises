(function () {
    var menuIcon = document.getElementsByTagName("hamburgermenu");
    console.log(menuIcon);
    var close = document.querySelector("span");
    var sideNav = document.getElementsByClassName("side-nav");
    var overlay = document.getElementsByClassName("overlay");


    menuIcon.addEventListener("click", function(e) {
        overlay.style.display = "block";
        sideNav.classList.add("open");
    });

    overlay.addEventListener("click", function (e) {
        sideNav.classList.remove("open");
        overlay.style.display = "none"; 
    });

    close.addEventListener("click", function (e) {
        sideNav.classList.remove("open");
        overlay.style.display = "none";
    }); 
})();

//somehow its not working. guess need some help regarding this.