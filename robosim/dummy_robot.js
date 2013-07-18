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

exports.DummyRobot = DummyRobot;
