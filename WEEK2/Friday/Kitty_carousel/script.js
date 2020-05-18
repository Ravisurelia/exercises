(function () {
    var kitties = document.querySelectorAll(".kitty-container img");
    var offScreenImage = document.getElementsByClassName("offscreen-left");
    var numberOfImages = document.querySelectorAll(".kitty-container img");
    console.log(numberOfImages);
    var dots = document.getElementsByClassName("dots");
    var i = 0;
    var timer;
    var inTransition;
   
    setTimeout(moveKitties, 3000);

    for (var k = 0; i < dots.length; i++){
        dots[k].addEventListener("click", getClickHandler(k));
    }

    function getClickHandler(k) {
        return function(e){
            console.log(k);
            if (e.target.classList.contains("on")){
                return;
            }
            if (inTransition){
                return;
            }
            clearTimeout(timer);
            moveKitties(i);
            e.target.classList.add("on");
        };
    }

    //trying to slove it but there is too much confusion.. need to sort out on zoom

    function moveKitties() {
        console.log("i:", i);
        if (i === numberOfImages.length - 1){
            kitties[i].classList.remove("onscreen");
            dots[k].classList.remove("on");
            kitties[i].classList.add("offscreen-left");
            kitties[0].classList.add("onscreen");
        } else {
            kitties[i].classList.remove("onscreen");
            kitties[i].classList.add("offscreen-left");
            kitties[i + 1].classList.add("onscreen");
            dots[k + 1].classList.add("on");
        }

    

        function properTransition(event){
            if (event.target === offScreenImage[0]) {
                kitties[i].classList.remove("offscreen-left");
                dots[k].classList.remove("on");
                console.log(offScreenImage);
                if (i < numberOfImages.length - 1){
                    i++;
                    setTimeout(moveKitties, 3000);
                }else {
                    kitties[0].classList.add("onscreen");
                    dots[k].classList.add("on");
                    i = 0;
                    k = 0;
                    setTimeout(moveKitties, 3000);
                }
            }
        }

        document.addEventListener("transitionend", properTransition); 
        document.getClickHandler(k);
    }    
})();