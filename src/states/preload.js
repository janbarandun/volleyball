
/*
    preload module
    preload globaly used assets
*/

export default class Preload extends Phaser.State {
    
    preload() {
        // preload assets

        this.game.load.image('net', 'assets/img/net-1.png');
        this.game.load.image('ball', 'assets/img/ball.png');
        this.game.load.image('player', 'assets/img/player.png');

        
    }

    create() {

        this.game.state.start('Main');
        
    }

}
