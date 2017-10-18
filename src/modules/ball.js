export default class Ball extends Phaser.Sprite {

    constructor(game,x,y,ballMaterial) {

        super(game,x, y, 'ball');

        game.stage.addChild(this);

        game.physics.p2.enable(this,true);
        
        this.body.clearShapes();
        this.body.loadPolygon('physicsData', 'ball');
        this.body.mass = 1;

        this.body.setMaterial(ballMaterial);

        this.body.collideWorldBounds = true;

    }

    update() {

        
    }

    //from http://phaser.io/examples/v2/p2-physics/tilemap-gravity
    touchingDown(someone) {
        var yAxis = p2.vec2.fromValues(0, 1);
        var result = false;
        for (var i = 0; i < this.game.physics.p2.world.narrowphase.contactEquations.length; i++) {
            var c = this.game.physics.p2.world.narrowphase.contactEquations[i];  // cycles through all the contactEquations until it finds our "someone"
            if (c.bodyA === someone.body.data || c.bodyB === someone.body.data) {
                var d = p2.vec2.dot(c.normalA, yAxis); // Normal dot Y-axis
                if (c.bodyA === someone.body.data) d *= -1;
                if (d > 0.5) result = true;
            }
        }
        return result;
    }

}