var gamejs = require('gamejs');

var DummyRobot = function() {
   return this;
};

DummyRobot.prototype.moveForward = function (steps) {
    return gamejs.worker.post({code: 'robot.moveForward('+steps+');' });
}

DummyRobot.prototype.moveBackward = function (steps) {
    return gamejs.worker.post({code: 'robot.moveBackward('+steps+');' });
}

DummyRobot.prototype.onFwd = function (speed) {
    return gamejs.worker.post({code: 'robot.onFwd('+speed+');' });
}

DummyRobot.prototype.onRev = function (speed) {
    return gamejs.worker.post({code: 'robot.onRev('+speed+');' });
}

exports.DummyRobot = DummyRobot;
