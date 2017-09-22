//import {default as LevelConfig} from '../config/levelconfig';

export default class Boot extends Phaser.State {
    
    preload() {
        game.stage.backgroundColor = '#F1F4F4';
    }

    create() {
        
        game.global = {};
        
        //game.global.levelConfig = new LevelConfig(this);

        //game.state.start('Preload');
    }

}
