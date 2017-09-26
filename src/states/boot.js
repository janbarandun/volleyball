
/*
    boot file
    init basic settings of the game
*/


//import {default as LevelConfig} from '../config/levelconfig';

export default class Boot extends Phaser.State {
    
    preload() {
        this.game.stage.backgroundColor = '#000';

    }

    create() {
        
        // prepare global vars
        this.game.global = {};
        
        //game.global.levelConfig = new LevelConfig(this);

        this.game.state.start('Preload');
    }

}
