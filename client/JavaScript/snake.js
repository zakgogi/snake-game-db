
class Snake {
    constructor(){ 
        this.x = 200;
        this.y = 200;
        this.xVelocity = 0;
        this.yVelocity = 0;
        this.applesEaten = 0;
        this.tail = [];
    }

    update(){

        for (let i = 0; i < this.tail.length - 1; i++){
            this.tail[i] = this.tail[i+1]
        }

        this.tail[this.applesEaten] = {x : this.x, y : this.y}

        this.x += this.xVelocity;
        this.y += this.yVelocity;

        if (this.x > canvas.clientWidth - scale){
            this.x = 0;
        };
        if (this.x < 0){
            this.x = canvas.clientWidth;
        };
        if (this.y > canvas.clientHeight - scale){
            this.y = 0;
        };
        if (this.y < 0){
            this.y = canvas.clientHeight;
        };

    }

    display(){

        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x, this.y, scale, scale);

        for (let i = 0; i < this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale)
        }


    }

    updateDirection(direction){
        switch(direction){
            case 'Up':
                if (this.yVelocity <= 0){
                    this.xVelocity = 0;
                    this.yVelocity = -scale * 1;
                }
                break;
            case 'Down':
                if (this.yVelocity >= 0){
                    this.xVelocity = 0;
                    this.yVelocity = scale * 1;
                }
                break;
            case 'Left':
                if (this.xVelocity <= 0){
                    this.xVelocity = -scale * 1;
                    this.yVelocity = 0;
                }
                break;       
            case 'Right':
                if (this.xVelocity >= 0){
                this.xVelocity = scale * 1;
                this.yVelocity = 0;
                }
                break;
        }

    }

    updateDirectionClick(direction){
        switch(direction){
            case 'up-btn':
                if (this.yVelocity <= 0){
                    this.xVelocity = 0;
                    this.yVelocity = -scale * 1;
                }
                break;
            case 'down-btn':
                if (this.yVelocity >= 0){
                    this.xVelocity = 0;
                    this.yVelocity = scale * 1;
                }
                break;
            case 'left-btn':
                if (this.xVelocity <= 0){
                    this.xVelocity = -scale * 1;
                    this.yVelocity = 0;
                }
                break;       
            case 'right-btn':
                if (this.xVelocity >= 0){
                this.xVelocity = scale * 1;
                this.yVelocity = 0;
                }
                break;
        }

    }

    eat(apple){
        if (apple.x === this.x && apple.y === this.y){
            this.applesEaten++;
            return true;
        } else {
            return false; 
        }
    }

    // bigEat(apple){
    //     if (apple.x === this.x && apple.y === this.y){
    //         this.applesEaten = this.applesEaten + 3;
    //         return true;
    //     } else {
    //         return false; 
    //     }

    // }

    isDead(){
        if (this.xVelocity === 0 && this.yVelocity === 0){
            return false;
        }

        for (let i=0; i<this.tail.length; i++){
            if (this.x === this.tail[i].x && this.y === this.tail[i].y){
                return true;
            } 
        }

        return false; 
    }



}



