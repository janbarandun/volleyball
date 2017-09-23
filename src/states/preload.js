
/*
    preload module
    preload globaly used assets
*/

export default class Preload extends Phaser.State {
    
    preload() {
        // preload assets

    }

    create() {

        game.state.start('Game1');
        
    }

}
