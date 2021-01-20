/* function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
var images = document.getElementsByClassName("instachg");
var i = 4;
//startImageTransition(i);

function startImageTransition(v) {
    if (v < 0) {
        v = 4;
    }

    console.log(v);
    setInterval(opacidade(v), 10000);



}

function opacidade(y) {

    images[y].setAttribute("style", "opacity: 1; transition-duration: 5s; transition-property: opacity; opacity: 0;")
    y--;
    setTimeout(50000);
    images[y].setAttribute("style", "opacity: 1; transition-duration: 5s; transition-property: opacity; opacity: 0;")


} */