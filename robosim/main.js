/**
 * @fileoverview Minimal is the smalles GameJs app I could think of, which still shows off
 * most of the concepts GameJs introduces.
 *
 * It's a pulsating, colored circle. You can make the circle change color
 * by clicking.
 *
 */

var gamejs = require('gamejs');

var Robot = require('robot').Robot;

gamejs.preload(['img/robot.png']);

var SCREEN_WIDTH = 500;
var SCREEN_HEIGHT = 400;

function main() {

   // setup screen and ball.
   // ball in screen center.
   // start game loop.
   var display = gamejs.display.setMode([SCREEN_WIDTH, SCREEN_HEIGHT]);

   var robot = new Robot(SCREEN_WIDTH/2, SCREEN_HEIGHT/2);

   // ball changes color on mouse up
   gamejs.onEvent(function(event) {

   });

   // update ball position
   // clear display
   // draw
   gamejs.onTick(function(msDuration) {
       robot.stayIn([SCREEN_WIDTH, SCREEN_HEIGHT]);
       robot.draw(display);
   });
};

// call main after all resources have finished loading
gamejs.ready(main);
