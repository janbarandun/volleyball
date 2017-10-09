import 'pixi';
import 'p2';
import 'phaser';
import pkg from '../package.json';

import * as states from './states';

class Game extends Phaser.Game {
  
     constructor() {
  
         //super(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO);

         super(1920, 1080, Phaser.AUTO)
  
         Object.keys(states).forEach(state => this.state.add(state, states[state]));
  
         this.state.start('Boot');
     }
  
 }
  
 new Game();