
import Renderer from "./Renderer.js";
import Ball from "./Ball.js";
import Paddle from "./Paddle.js";
import Bricks from "./Bricks.js";

window.onload = () => {
    game.init();
}

class Game {
    ballRadius = 10;
    
    score = 0;
    lives = 4;
    paddleBallHit = 0;
    
    init = () => {
        console.log("init");
       this.renderer = Renderer.getInstance();
       this.canvas = this.renderer.getCanvas();
       this.context = this.renderer.getContext();
       
       this.ball = new Ball(this.ballRadius);
       this.paddle = new Paddle();
       this.bricks = new Bricks();
       
       this.startGame();
    }
    
    startGame = () => {
        const fps = 60;
        setInterval(this.updateGame, 1000 / fps);
    }
    
    updateGame = () => {
        
        this.ball.update();
        if (this.ball.checkPaddleCollision(this.paddle)) {
            console.log("odbicie piłki paletką");
            this.paddleBallHit;
        }
        
        if (this.ball.checkBottomWallCollision() ) {
            console.log("strata życia");
            this.lives--;
            this.ball.restart();
        }
        
        if (this.lives <= 0) {
            console.log("koniec żyć, restart gry");
            this.restart();
        }
        
        this.render();
    }
    
    render = () => {
        this.renderer.clearCanvas();
        
        this.paddle.draw();
        this.ball.draw();
    }
    
    restart =() => {
        this.ball.restart();
        this.score = 0;
        this.lives = 4;
    }
        
}

const game = new Game();