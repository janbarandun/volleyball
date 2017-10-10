import 'pixi';
import 'p2';
import 'phaser';
import pkg from '../package.json';

import * as states from './states';

class Game extends Phaser.Game {
  
     constructor() {
  
         super(1920, 1080, Phaser.AUTO)
  
         Object.keys(states).forEach(state => this.state.add(state, states[state]));
  
         this.state.start('Boot');
     }
  
 }
  
 new Game();