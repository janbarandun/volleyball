//import {default as LevelConfig} from '../config/levelconfig';

export default class Game1 extends Phaser.State {

    // init() {
    //     this.player;
    //     this.floor1;
    //     this.cursors;
    // }
    
    preload() {

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //  Set the world (global) gravity
        this.game.physics.arcade.gravity.y = 400;
        

    }


    create() {

        var colorArea = this.game.add.bitmapData(30,70);
        colorArea.ctx.beginPath();
        colorArea.ctx.rect(0,0,30,70);
        colorArea.ctx.fillStyle = '#ffc600';
        colorArea.ctx.fill();

        var floor = this.game.add.bitmapData(789,30);
        floor.ctx.beginPath();
        floor.ctx.rect(0,0,789,30);
        floor.ctx.fillStyle = '#088A08';
        floor.ctx.fill();

        var floor2 = this.game.add.bitmapData(300,30);
        floor2.ctx.beginPath();
        floor2.ctx.rect(0,0,200,30);
        floor2.ctx.fillStyle = '#088A08';
        floor2.ctx.fill();

        this.player = this.game.add.sprite(40, 10, colorArea);

        this.floor1 = this.game.add.sprite(0, 450, floor);
        this.floor2 = this.game.add.sprite(1050, 550, floor);

        this.game.physics.enable([this.player,this.floor1,this.floor2], Phaser.Physics.ARCADE);

        this.player.body.collideWorldBounds = true;
        this.player.body.bounce.y = 0.5;

        this.floor1.body.collideWorldBounds = true;
        this.floor1.body.immovable = true;
        this.floor1.body.allowGravity = false;

        this.floor2.body.collideWorldBounds = true;
        this.floor2.body.immovable = true;
        this.floor2.body.allowGravity = false;

        this.cursors = this.game.input.keyboard.createCursorKeys();

    }
    update () {
      
        this.game.physics.arcade.collide(this.player, this.floor1);
        this.game.physics.arcade.collide(this.player, this.floor2);
      
        if (this.cursors.left.isDown) {
            this.player.body.x -= 8;           
        } else if (this.cursors.right.isDown) {
            this.player.body.x += 8; 
        }

        if (this.cursors.down.isDown) {
            this.player.body.y += 8;
        } else if (this.cursors.up.isDown) {
            this.player.body.y -= 8;
        }
      
      }

}
