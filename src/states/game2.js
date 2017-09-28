//import {default as LevelConfig} from '../config/levelconfig';

export default class Game2 extends Phaser.State {
    
    preload() {

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //  Set the world (global) gravity
        this.game.physics.arcade.gravity.y = 400;

        this.game.load.image('net', 'assets/img/net-1.png');
        this.game.load.image('ball', 'assets/img/ball.png');
        

    }


    create() {
        
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.net = this.game.add.sprite(910, 450, 'net');
        this.ball = this.game.add.sprite(300, 600, 'ball');

        this.game.physics.enable([this.ball,this.net]);

        this.net.body.immovable = true;

        this.ball.body.bounce.set(0.8);
        this.ball.body.collideWorldBounds = true;

        this.ball.inputEnabled = true;

        this.ball.events.onInputUp.add(this.startBall, this);

    }

    update () {
        
        this.game.physics.arcade.collide(this.net, this.ball);

      
    }

    startBall () {
        this.ball.body.velocity.setTo(500,-600)
        this.ball.body.gravity.y = 400;
    }

}
