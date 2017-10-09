//import {default as LevelConfig} from '../config/levelconfig';
import {default as Player} from '../modules/game2.player.js';
import {default as Enemy} from '../modules/game2.enemy.js';

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
        this.ball = this.game.add.sprite(300, 600, 'ball');



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
        this.game.physics.arcade.collide(this.playerGroup, this.ball);
    

      
    }

    startBall () {
        this.ball.body.velocity.setTo(500,-700)
        this.ball.body.gravity.y = 400;
    }

}
