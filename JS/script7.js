let train = document.getElementById("train");
let position = 0;
let animation;

function moveTrain() {
    position += 5;
    if (position > window.innerWidth) {
        position = -300;
    }
    train.style.left = position + "px";
    animation = requestAnimationFrame(moveTrain);
}

function startAnimation() {
    if (!animation) {
        moveTrain();
    }
}

function stopAnimation() {
    cancelAnimationFrame(animation);
    animation = null;
}
