
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
let clickList = ["up-btn","down-btn","left-btn","right-btn"];
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
            
            localStorage.setItem("mostRecentScore", snake.applesEaten);
            //location.assign("http://127.0.0.1:5500/deadscreen.html");
            location.assign("https://snakejsgogi.netlify.app/deadscreen");
            // snake = new Snake();
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
for (let i=0; i<clickList.length;i++){
    let id = document.getElementById(clickList[i])
    id.addEventListener("click", ((evt) => {
        evt.preventDefault();
        snake.updateDirectionClick(clickList[i]);
    }));
    id.addEventListener("touchstart", ((evt) => {
        evt.preventDefault();
        snake.updateDirectionClick(clickList[i]);
    }));

}
// let id = document.getElementById(clickList[0])
// id.addEventListener("click", (() => {
//     snake.updateDirectionClick(clickList[0]);
// }));


window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.updateDirection(direction);
}) )

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

// for (let i=0; i < clickList.length; i++){
//     let id = document.getElementById(clickList[i]);
//     id.addEventListener('click', console.log(clickList[i]))
// }


drawGame();

