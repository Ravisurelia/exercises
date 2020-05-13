var pointer = document.querySelector("div");

document.addEventListener("mousemove", function (event) {
    pointer.style.top = event.clientY - pointer.offsetHeight / 2 + "px";
    pointer.style.left = event.clientX - pointer.offsetWidth / 2 + "px";
});