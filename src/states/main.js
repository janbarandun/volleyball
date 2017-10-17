//import {default as LevelConfig} from '../config/levelconfig';
import {default as Player} from '../modules/player.js';
import {default as Enemy} from '../modules/enemy.js';

export default class Main extends Phaser.State {
    
    preload() {

        this.game.load.physics('physicsData', '/assets/sprites.json');
        

    }


    create() {

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.gravity.y = 1500;

        this.playerGroup = this.game.add.group();

        this.player1 = new Player(this.game,1600,1000,this.playerGroup);
        this.player2 = new Enemy(this.game,250,1000,this.playerGroup);

        
        //  Set the world (global) gravity
        

        this.net = this.game.add.sprite(910, 700, 'net');
        this.ball = this.game.add.sprite(300, 400, 'ball');

        this.game.physics.p2.enable([this.ball,this.net],true);

        this.ball.body.clearShapes();
        this.ball.body.loadPolygon('physicsData', 'ball');
        this.ball.body.gravity.y = -100;
        this.ball.body.mass = 10;

        this.net.body.static = true;

        var playerMaterial = this.game.physics.p2.createMaterial('playerMaterial');

        this.player1.body.setMaterial(playerMaterial);
        this.player2.body.setMaterial(playerMaterial);

        var ballMaterial = this.game.physics.p2.createMaterial('ballMaterial', this.ball.body);
        var worldMaterial = this.game.physics.p2.createMaterial('worldMaterial');

        //  4 trues = the 4 faces of the world in left, right, top, bottom order
        this.game.physics.p2.setWorldMaterial(worldMaterial, true, true, false, true);

        //  Here is the contact material. It's a combination of 2 materials, so whenever shapes with
        //  those 2 materials collide it uses the following settings.
        //  A single material can be used by as many different sprites as you like.
        var contactMaterial = this.game.physics.p2.createContactMaterial(ballMaterial, worldMaterial);
    
        contactMaterial.friction = 0.3;     // Friction to use in the contact of these two materials.
        contactMaterial.restitution = 1;  // Restitution (i.e. how bouncy it is!) to use in the contact of these two materials.
        contactMaterial.stiffness = 1e7;    // Stiffness of the resulting ContactEquation that this ContactMaterial generate.
        contactMaterial.relaxation = 3;     // Relaxation of the resulting ContactEquation that this ContactMaterial generate.
        contactMaterial.frictionStiffness = 1e7;    // Stiffness of the resulting FrictionEquation that this ContactMaterial generate.
        contactMaterial.frictionRelaxation = 3;     // Relaxation of the resulting FrictionEquation that this ContactMaterial generate.
        contactMaterial.surfaceVelocity = 0;        // Will add surface velocity to this material. If bodyA rests on top if bodyB, and the surface velocity is positive, bodyA will slide to the right.

        var playerBallContactMaterial = this.game.physics.p2.createContactMaterial(playerMaterial, ballMaterial);

        playerBallContactMaterial.friction = 1.3;     // Friction to use in the contact of these two materials.
        playerBallContactMaterial.restitution = 1.5;
        playerBallContactMaterial.stiffness = 1e7;    // Stiffness of the resulting ContactEquation that this playerBallContactMaterial generate.
        playerBallContactMaterial.relaxation = 3;     // Relaxation of the resulting ContactEquation that this playerBallContactMaterial generate.
        playerBallContactMaterial.frictionStiffness = 1e7;    // Stiffness of the resulting FrictionEquation that this playerBallContactMaterial generate.
        playerBallContactMaterial.frictionRelaxation = 3;     // Relaxation of the resulting FrictionEquation that this playerBallContactMaterial generate.
        playerBallContactMaterial.surfaceVelocity = 0;

        //this.ball.body.collideWorldBounds = true;

        //this.ball.inputEnabled = true;

        //this.ball.events.onInputUp.add(this.startBall, this);

    }

    update () {
        
        //this.game.physics.p2.collide(this.net, this.ball);
        //this.game.physics.p2.collide(this.playerGroup, this.ball,this.hitBall); 

        // collide net and player
    

      
    }

    startBall () {
        //this.ball.body.velocity.setTo(500,-700)
        
    }

    hitBall (ball,player) {
        
        // enable gravity when ball not moving (didn't work with isMoving!?)
        // if(ball.body.gravity.y == 0) {
        //     ball.body.gravity.y = 400;
        // }
        
        // // how to shoot back the ball? this is shit.
        // ball.body.velocity.x = -(ball.body.velocity.x + 50);
        // ball.body.velocity.y = ball.body.velocity.y + 50;
        
        return true;
    }

}
