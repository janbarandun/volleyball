//import {default as LevelConfig} from '../config/levelconfig';
import {default as Player} from '../modules/player.js';
import {default as Enemy} from '../modules/enemy.js';

export default class Game2 extends Phaser.State {
    
    preload() {

        

    }


    create() {

        this.playerGroup = this.game.add.group();

        this.player1 = new Player(this.game,250,1000,this.playerGroup);
        this.player2 = new Enemy(this.game,1600,1000,this.playerGroup);

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //  Set the world (global) gravity
        this.game.physics.arcade.gravity.y = 400;
        
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.net = this.game.add.sprite(910, 450, 'net');
        this.ball = this.game.add.sprite(300, 800, 'ball');



        this.game.physics.enable([this.ball,this.net,this.player1,this.player2]);

        this.net.body.immovable = true;
        this.player1.body.immovable = true;
        this.player2.body.immovable = true;

        this.player1.body.gravity.y = 1200;
        this.player1.body.collideWorldBounds = true;


        this.ball.body.bounce.set(0.8);
        // ???? how to set a different bounce when colliding with wall or net ????


        this.ball.body.collideWorldBounds = true;
        
        this.ball.inputEnabled = true;

        this.ball.events.onInputUp.add(this.startBall, this);

    }

    update () {
        
        this.game.physics.arcade.collide(this.net, this.ball);
        this.game.physics.arcade.collide(this.playerGroup, this.ball,this.hitBall); 

        // collide net and player
    

      
    }

    startBall () {
        this.ball.body.velocity.setTo(500,-700)
        
    }

    hitBall (ball,player) {
        
        // enable gravity when ball not moving (didn't work with isMoving!?)
        if(ball.body.gravity.y == 0) {
            ball.body.gravity.y = 400;
        }
        
        // how to shoot back the ball? this is shit.
        ball.body.velocity.x = -(ball.body.velocity.x + 50);
        ball.body.velocity.y = ball.body.velocity.y + 50;

        console.log(ball.body.velocity.x)
        console.log(ball.body.velocity.y)
        console.log("...")

        return true;
    }

}
