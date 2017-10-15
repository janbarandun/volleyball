export default class Player extends Phaser.Sprite {

    constructor(game,x,y,playerGroup) {

        super(game,x, y, 'player');
        game.stage.addChild(this);

        playerGroup.add(this);

        this.cursors = game.input.keyboard.createCursorKeys();
       
    }

    update() {

        this.body.velocity.x = 0;
        
        let cur = this.cursors;
        if (cur.left.isDown) {
            this.body.velocity.x = -350;
            //player.animations.play('left');
        }
        else if (cur.right.isDown) {
            this.body.velocity.x = 350;
            //player.animations.play('right');
        }
        else {
            //player.animations.stop();
            //this.player.frame = 4;
        }
        //  Allow the player to jump if touching the ground.
        if (cur.up.isDown && this.touchingDown(this)) {
            this.body.velocity.y = -1200;
        }
    }

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