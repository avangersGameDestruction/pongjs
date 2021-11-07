# pongjs
 

 first create a canvas element
```javascript
const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;
    document.body.appendChild(canvas);
```

here we create a ball
```javascript
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
```

creating a paddle
```javascript
const paddle = {
        x: canvas.width / 2 - 40,
        y: canvas.height - 40,
        width: 80,
        height: 20,
        color: "#0095DD"
    };
```

importing the render function
```javascript
const render = () => {
        // draw the canvas
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // draw the ball
        ctx.fillStyle = ball.color;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fill();

        // draw the paddle
        ctx.fillStyle = paddle.color;
        ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    };
```
ball and paddle movement
```javascript
// move the ball
    const moveBall = () => {
        ball.x += ball.velocity.x;
        ball.y += ball.velocity.y;
    };

    // move the paddle
    const movePaddle = event => {
        paddle.x = event.clientX - canvas.offsetLeft - paddle.width / 2;
    };
```
collision detection
```javascript
const collision = () => {
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
            ball.velocity.x = -ball.velocity.x;
        }
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
            ball.velocity.y = -ball.velocity.y;
        }
        if (
            ball.y - ball.radius < paddle.y + paddle.height &&
            ball.x > paddle.x &&
            ball.x < paddle.x + paddle.width
        ) {
            ball.velocity.y = -ball.velocity.y;
        }
    };
```
update the game state
```javascript
const update = () => {
        moveBall();
        collision();
    };
```
keyboard controls
```javascript
const keyDownHandler = event => {
        if (event.key === "Right" || event.key === "ArrowRight") {
            paddle.velocity.x = 10;
        } else if (event.key === "Left" || event.key === "ArrowLeft") {
            paddle.velocity.x = -10;
        }
    };

    const keyUpHandler = event => {
        paddle.velocity.x = 0;
    };
```
game loop (60fps)
```javascript
const gameLoop = () => {
        update();
        render();
        requestAnimationFrame(gameLoop);
    };
```
start the game
```javascript
gameLoop();
```
listen to keyboard events
```javascript
document.addEventListener("keydown", keyDownHandler, false);
```