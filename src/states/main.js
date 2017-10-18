//import {default as LevelConfig} from '../config/levelconfig';
import {default as Player} from '../modules/player.js';
import {default as Ball} from '../modules/ball.js';
import {default as CollisionController} from '../modules/collisionController.js';

export default class Main extends Phaser.State {
    
    preload() {

        this.game.load.physics('physicsData', '/assets/sprites.json');

    }

    create() {

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.gravity.y = 1500;

        this.playerGroup = this.game.add.group();

        var playerMaterial = this.game.physics.p2.createMaterial('playerMaterial');
        var ballMaterial = this.game.physics.p2.createMaterial('ballMaterial');
        var worldMaterial = this.game.physics.p2.createMaterial('worldMaterial');
        
        this.player1 = new Player(this.game,1600,1000,this.playerGroup,playerMaterial,'cursors');
        this.player2 = new Player(this.game,250,1000,this.playerGroup,playerMaterial,'bot');

        this.ball = new Ball(this.game,300,400,ballMaterial,);

        this.net = this.game.add.sprite(910, 800, 'net');
        this.game.physics.p2.enable(this.net,true);
        this.net.body.static = true;

        this.collisionController = new CollisionController(this.game,playerMaterial,ballMaterial, worldMaterial);

    }

    update () {
        // nothing yet
      
    }

}
