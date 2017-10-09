
/*
    boot file
    init basic settings of the game
*/


//import {default as LevelConfig} from '../config/levelconfig';

export default class Boot extends Phaser.State {
    
    preload() {

    }

    create() {
        
        // prepare global vars
        this.game.global = {};
        
        //game.global.levelConfig = new LevelConfig(this);
        this.game.stage.backgroundColor = '#000';
        this.game.state.start('Preload');
    }

}
