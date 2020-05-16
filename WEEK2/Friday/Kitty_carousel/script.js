(function () {
    var kitties = document.querySelectorAll(".kitty-container img");
    var offScreenImage = document.getElementsByClassName("offscreen-left");
    var numberOfImages = document.querySelectorAll(".kitty-container img");
    console.log(numberOfImages);
    var i = 0;
    setTimeout(moveKitties, 3000);

    function moveKitties() {
        console.log("i:", i);
        if (i === numberOfImages.length - 1){
            kitties[i].classList.remove("onscreen");
            kitties[i].classList.add("offscreen-left");
            kitties[0].classList.add("onscreen");
        } else {
            kitties[i].classList.remove("onscreen");
            kitties[i].classList.add("offscreen-left");
            kitties[i + 1].classList.add("onscreen");
        }

    

        function properTransition(event){
            if (event.target === offScreenImage[0]) {
                kitties[i].classList.remove("offscreen-left");
                console.log(offScreenImage);
                if (i < numberOfImages.length - 1){
                    i++;
                    setTimeout(moveKitties, 3000);
                }else {
                    kitties[0].classList.add("onscreen");
                    i = 0;
                    setTimeout(moveKitties, 3000);
                }
            }
        }

        document.addEventListener("transitionend", properTransition); 
    }    
})();