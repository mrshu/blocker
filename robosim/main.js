var gamejs = require('gamejs');

var Robot = require('robot').Robot;

gamejs.preload(['img/robot.png']);

var SCREEN_WIDTH = 500;
var SCREEN_HEIGHT = 400;

gamejs.ready(function(){

    var display = gamejs.display.setMode([SCREEN_WIDTH, SCREEN_HEIGHT]);

    var robot = new Robot([SCREEN_WIDTH/2, SCREEN_HEIGHT/2], 'img/robot.png');

    gamejs.onEvent(function(event) {
        robot.eventResponse(event);
    });

    gamejs.onTick(function(msDuration) {
        robot.stayIn([SCREEN_WIDTH, SCREEN_HEIGHT]);
        display.clear();
        robot.draw(display);
    });

});
