//import {default as LevelConfig} from '../config/levelconfig';

export default class Game2 extends Phaser.State {
    
    preload() {

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //  Set the world (global) gravity
        this.game.physics.arcade.gravity.y = 400;

        this.game.load.image('net', 'assets/img/net-1.png');
        

    }


    create() {
        console.log(this.game.width)
        this.net = this.game.add.sprite(910, 450, 'net');
        
        console.log(this.net.width)

    }

    update () {
      
        
      
      }

}
