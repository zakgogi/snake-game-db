class Apple {
    constructor(){
        this.x = 0;
        this.y = 0;
    };

    assignLocation(){
        this.x = (Math.floor(Math.random()*(canvas.clientWidth/scale)))*scale;
        this.y = (Math.floor(Math.random()*(canvas.clientHeight/scale)))*scale;
    }

    display(){
        ctx.fillStyle = '#c15e80';
        ctx.fillRect(this.x, this.y, scale, scale);
        // ctx.arc(this.x, this.y, 10, 0, Math.pi*2 );
        // ctx.fill();
    }

}

// class GoldenApple {
//     constructor(){
//         this.x = 0;
//         this.y = 0;
//     }

//     assignLocation(){
//         this.x = (Math.floor(Math.random()*(canvas.clientWidth/scale)))*scale;
//         this.y = (Math.floor(Math.random()*(canvas.clientHeight/scale)))*scale;
//     }


//     display(){
//         ctx.fillStyle = '#efc84a57';
//         ctx.fillRect(this.x, this.y, scale, scale);
//     }

//     disappear(){
//         this.x = -10;
//         this.y = -10;
//     }

//     exists(){
//         if (this.x >= 0 && this.y >= 0){
//             return true;
//         } else {
//             return false; 
//         }
//     }

// }