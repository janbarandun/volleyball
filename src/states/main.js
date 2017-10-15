//import {default as LevelConfig} from '../config/levelconfig';
import {default as Player} from '../modules/player.js';
import {default as Enemy} from '../modules/enemy.js';

export default class Main extends Phaser.State {
    
    preload() {

        this.game.load.physics('physicsData', '/assets/sprites.json');
        

    }


    create() {

        this.playerGroup = this.game.add.group();

        this.player1 = new Player(this.game,250,1000,this.playerGroup);
        this.player2 = new Enemy(this.game,1600,1000,this.playerGroup);

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.physics.startSystem(Phaser.Physics.P2JS);

        //  Set the world (global) gravity
        this.game.physics.p2.gravity.y = 2000;

        this.net = this.game.add.sprite(910, 700, 'net');
        this.ball = this.game.add.sprite(300, 800, 'ball');



        this.game.physics.p2.enable([this.ball,this.net,this.player1,this.player2],true);

        //this.net.body.immovable = true;

        this.player1.body.clearShapes();
        this.player1.body.loadPolygon('physicsData', 'player');

        this.player2.body.clearShapes();
        this.player2.body.loadPolygon('physicsData', 'player');

        this.ball.body.clearShapes();
        this.ball.body.loadPolygon('physicsData', 'ball');

        this.net.body.static = true;
        //this.player2.body.immovable = true;

        this.player1.body.gravity.y = 1200;
        this.player1.body.collideWorldBounds = true;
        this.player1.fixedRotation = true;

        var playerMaterial = this.game.physics.p2.createMaterial('playerMaterial', this.player1.body);
        var worldMaterial = this.game.physics.p2.createMaterial('worldMaterial');
        //this.ball.body.bounce.set(0.8);
        // ???? how to set a different bounce when colliding with wall or net ????


        this.ball.body.collideWorldBounds = true;
        
        this.ball.inputEnabled = true;

        this.ball.events.onInputUp.add(this.startBall, this);

    }

    update () {
        
        //this.game.physics.p2.collide(this.net, this.ball);
        //this.game.physics.p2.collide(this.playerGroup, this.ball,this.hitBall); 

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
