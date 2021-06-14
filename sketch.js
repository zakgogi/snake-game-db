
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
let speed = 15;
let scale = 10; 
let snake;
let apple;
let scoreboard; 
// let bigApple;

const drawGame = () => {

    apple = new Apple();
    snake = new Snake();
    //bigApple = new GoldenApple;
    apple.assignLocation();
    
    

    window.setInterval(() => {
        scoreboard = new Scoreboard(snake.applesEaten);
        ctx.clearRect(0, 0 , canvas.width, canvas.height);
        snake.update();
        snake.display();
        apple.display();
        scoreboard.display();
        // if (bigApple.exists()){
        //     bigApple.display();
        // }

        if (snake.eat(apple)){
            apple.assignLocation();
        };

        

        if (snake.isDead()){
            snake = new Snake();
        }

        // if (snake.eat(bigApple)){
        //     bigApple.disappear();
        // }


    }, 1000/speed);

    // window.setInterval(() => {

    //     bigApple.assignLocation();

    //     window.setInterval(() => {

    //         bigApple.disappear();

    //     }, 4000);

    // }, 10000)


    

}

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.updateDirection(direction);
}) )

drawGame();

