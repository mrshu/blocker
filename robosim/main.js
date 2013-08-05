var gamejs = require('gamejs');
var draw = require('gamejs/draw');

var Robot = require('robot').Robot;

gamejs.preload(['img/robot.png']);

var SCREEN_WIDTH = 500;
var SCREEN_HEIGHT = 400;

var display;

var evalWorker = {};


ticker = function(msDuration) {
    display.clear();

    var boundaries = new gamejs.Rect([0, 0, SCREEN_WIDTH, SCREEN_HEIGHT]);
    draw.rect(display, "#cccccc", boundaries, 4);

    robot.stayIn([SCREEN_WIDTH, SCREEN_HEIGHT]);
    robot.draw(display);
}

function main() {
    display = gamejs.display.setMode([SCREEN_WIDTH, SCREEN_HEIGHT]);
    robot = new Robot([SCREEN_WIDTH/2, SCREEN_HEIGHT/2], 'img/robot.png');

    evaler = function(code) {
        evalWorker.post({todo: code});
        robot.onRev(0);
    }

    evalWorker = new gamejs.worker.Worker('./evaler');

    evalWorker.onEvent(function(event) {
        eval(event.code);
    });

    evalWorker.onError(function(data) {
        gamejs.log('worker threw an exception', data);
    });

    gamejs.onEvent(function(event) {
        robot.eventResponse(event);
    });

    gamejs.onTick(function(msDuration){
        robot.update(msDuration);
        ticker();
    });
}

gamejs.ready(main);
