var gamejs = require('gamejs');

var Robot = require('robot').Robot;

gamejs.preload(['img/robot.png']);

var SCREEN_WIDTH = 500;
var SCREEN_HEIGHT = 400;

var display;

var evalWorker = {};
evaler = function(code) {
    evalWorker.post({todo: code});
}

ticker = function(msDuration) {
    display.clear();
    robot.stayIn([SCREEN_WIDTH, SCREEN_HEIGHT]);
    robot.draw(display);
}

function main() {
    display = gamejs.display.setMode([SCREEN_WIDTH, SCREEN_HEIGHT]);
    robot = new Robot([SCREEN_WIDTH/2, SCREEN_HEIGHT/2], 'img/robot.png');


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
        ticker();
    });
}

gamejs.ready(main);
