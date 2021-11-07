// create a small pong game
function pong() {
    // create a canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;
    document.body.appendChild(canvas);

    // create a ball
    const ball = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 10,
        velocity: {
            x: 4,
            y: 4
        },
        color: "#0095DD"
    };
}