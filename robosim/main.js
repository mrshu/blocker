var gamejs = require('gamejs');

var Robot = require('robot').Robot;

gamejs.preload(['img/robot.png']);

var SCREEN_WIDTH = 500;
var SCREEN_HEIGHT = 400;

var display;
ticker = function(msDuration) {
    display.clear();
    robot.stayIn([SCREEN_WIDTH, SCREEN_HEIGHT]);
    robot.draw(display);
}

function main() {
    display = gamejs.display.setMode([SCREEN_WIDTH, SCREEN_HEIGHT]);
    robot = new Robot([SCREEN_WIDTH/2, SCREEN_HEIGHT/2], 'img/robot.png');

    gamejs.onEvent(function(event) {
        robot.eventResponse(event);
    });

    gamejs.onTick(ticker);
}

gamejs.ready(main);
