import 'pixi';
import 'p2';
import 'phaser';
//import 'require-dir'

import pkg from '../package.json';

import * as states from './states';

const config = {
  width:1920,
  height: 1080,
  renderer: Phaser.AUTO,
  parent: '',
  transparent: false,
  antialias: false,
  physicsConfig: { arcade: true },
};

// init game
game = new Phaser.Game(config);

// load states located in folder /states to the game 
// if new state module added, edit file /states/index.js
Object.keys(states).forEach(state => game.state.add(state, states[state]));

game.state.start('Boot');