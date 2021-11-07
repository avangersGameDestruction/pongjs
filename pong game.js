// create a small pong game
function pong() {
    // create a canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;
    document.body.appendChild(canvas);
}