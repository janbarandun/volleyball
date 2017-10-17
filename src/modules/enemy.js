export default class Enemy extends Phaser.Sprite {

    constructor(game,x,y,playerGroup) {

        super(game,x, y, 'player');
        game.stage.addChild(this);

        playerGroup.add(this);

        game.physics.p2.enable(this,true);

        this.body.clearShapes();
        this.body.loadPolygon('physicsData', 'player');
        this.body.mass = 15;

        //this.body.gravity.y = 1200;
        this.body.collideWorldBounds = true;
        this.body.fixedRotation = true;


        this.cursors = game.input.keyboard.createCursorKeys();

        this.wasd = {
            up: game.input.keyboard.addKey(Phaser.Keyboard.W),
            down: game.input.keyboard.addKey(Phaser.Keyboard.S),
            left: game.input.keyboard.addKey(Phaser.Keyboard.A),
            right: game.input.keyboard.addKey(Phaser.Keyboard.D),
        };
       
    }

    update() {

        this.body.velocity.x = 0;
        
        let cur = this.wasd;

        if (cur.left.isDown) {
            this.body.velocity.x = -800;
            //player.animations.play('left');
        }
        else if (cur.right.isDown) {
            this.body.velocity.x = 800;
            //player.animations.play('right');
        }
        else {
            //player.animations.stop();
            //this.player.frame = 4;
        }
        //  Allow the player to jump if touching the ground.
        if (cur.up.isDown && this.touchingDown(this)) {
            this.body.velocity.y = -800;
        }
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