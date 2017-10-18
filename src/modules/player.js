export default class Player extends Phaser.Sprite {

    constructor(game,x,y,playerGroup,playerMaterial,controls) {

        super(game,x, y, 'player');

        this.autoplay = false;

        game.stage.addChild(this);
        playerGroup.add(this);

        game.physics.p2.enable(this,true);

        this.body.clearShapes();
        this.body.loadPolygon('physicsData', 'player');
        this.body.mass = 5;

        this.body.setMaterial(playerMaterial);

        this.body.collideWorldBounds = true;
        this.body.fixedRotation = true;

        if(controls == 'cursors') {
            this.playerInput = game.input.keyboard.createCursorKeys();
        } else if (controls == 'wasd') {
            this.playerInput = {
                up: game.input.keyboard.addKey(Phaser.Keyboard.W),
                down: game.input.keyboard.addKey(Phaser.Keyboard.S),
                left: game.input.keyboard.addKey(Phaser.Keyboard.A),
                right: game.input.keyboard.addKey(Phaser.Keyboard.D),
            };
        } else if (controls == 'bot'){
            this.playerInput = {};
            this.autoplay = true;
        }
        
       
    }

    update() {

        this.body.velocity.x = 0;
        
            if(!this.autoplay) {
            let cur = this.playerInput;

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
                this.body.moveUp(1200);
            }
        } else {
            // start autopilot
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