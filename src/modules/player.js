export default class Player extends Phaser.Sprite {

    constructor(game,x,y,playerGroup) {

        super(game,x, y, 'player');
        game.stage.addChild(this);

        playerGroup.add(this);

        this.cursors = game.input.keyboard.createCursorKeys();
       
    }

    update() {

        this.body.velocity.x = 0;

        if (this.cursors.left.isDown)
        {
            this.body.velocity.x -= 400;
        }
        else if (this.cursors.right.isDown)
        {
            this.body.velocity.x += 400;
        }
    
        if (this.cursors.up.isDown) {

            if (this.body.onFloor()){
                this.body.velocity.y = -800;
            }
        }
        else if (this.cursors.down.isDown)
        {
           // this.y += 4;
        }
    }

}