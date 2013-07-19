
/**
 * A worker for asynchronous execution of code which controls the robot.
 *
 */

var gamejs = require('gamejs');
var DummyRobot = require('dummy_robot').DummyRobot;

var handleEvent = function(data) {
   if (data.todo) {
      var robot = new DummyRobot();
      var code = data.todo;
      
      //gamejs.worker.post(data.todo);

      try {
        eval(code);
      } catch (e) {
        // Null is thrown for infinite loop.
        // Otherwise, abnormal termination is a user error.
        gamejs.log(e);
      }


   } else {
      gamejs.log('unknown todo');
   }
}
gamejs.ready(function() {
   gamejs.onEvent(handleEvent);
})
