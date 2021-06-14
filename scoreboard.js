class Scoreboard {
    constructor(number){
        this.x = canvas.clientWidth - 40;
        this.y = 30;
        this.number = number;
    }

    display(){
        if (this.number < 10){
            this.number = `0${this.number.toString()}`
        } else {
            this.number = this.number.toString();
        }
        ctx.font = "30px Arial";
        ctx.fillText(this.number, this.x, this.y);
    }

}