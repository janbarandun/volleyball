import 'pixi';
import 'p2';
import 'phaser';
//import 'require-dir'

import pkg from '../package.json';

//import * as states from './states';

const config = {
  renderer: Phaser.AUTO,
  parent: '',
  state: {
    preload,
    create,
  },  
  transparent: false,
  antialias: false,
  physicsConfig: { arcade: true },
};

// init game
const game = new Phaser.Game(config);

// auto add states located in folder /states to the game 
//Object.keys(states).forEach(state => game.state.add(state, states[state]));

function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.physics.startSystem(Phaser.Physics.ARCADE);
  
  //  Set the world (global) gravity
  game.physics.arcade.gravity.y = 400;

}

var block1;

function create() {
  console.log(game)

  var colorArea = this.game.add.bitmapData(30,30);
	
  // draw to the canvas context like normal
  colorArea.ctx.beginPath();
  colorArea.ctx.rect(0,0,30,30);
  colorArea.ctx.fillStyle = '#ffc600';
  colorArea.ctx.fill();

  block1 = game.add.sprite(40, 10, colorArea);

 

  game.physics.enable([block1], Phaser.Physics.ARCADE);

  block1.body.collideWorldBounds = true;
  block1.body.bounce.y = 0.5;
  
}
