let element = document.getElementById("nobita");
function goUp() {
    element.style.top = parseInt(element.style.top) - 20 + "px";
}
function goDown() {
    element.style.top = parseInt(element.style.top) + 20 + "px";
}
function goLeft() {
    element.style.left = parseInt(element.style.left) - 20 + "px";
}
function goRight() {
    element.style.left = parseInt(element.style.left) + 20 + "px";
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            goLeft();
            break;
        case 39:
            goRight();
            break;
        case 38:
            goUp();
            break;
        case 40:
            goDown();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}
window.onload = docReady;