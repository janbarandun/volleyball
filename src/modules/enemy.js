export default class Enemy extends Phaser.Sprite {

    constructor(game,x,y,playerGroup) {

        super(game,x, y, 'player');
        game.stage.addChild(this);

        playerGroup.add(this);

        game.physics.p2.enable(this,true);
        
        this.body.clearShapes();
        this.body.loadPolygon('physicsData', 'player');
        this.body.gravity.y = 1200;
        this.body.collideWorldBounds = true;
        this.body.fixedRotation = true;
       
    }

    update() {
        
    }

}