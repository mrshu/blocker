/**
 * This worker responds to a message `{todo: "nextprimes", start: 123}`
 *
 * and will return five primes after the `start` number. It will
 * skip 100.000 primes between each of those five.
 * (arbitrary algorithm, designed to be long running)
 */
var gamejs = require('gamejs');
DummyRobot = require('dummy_robot').DummyRobot;

var handleEvent = function(data) {
   if (data.todo === 'eval') {
       gamejs.log('stuff to be evaled', data.code);
        
       function waiter(millis) {
            var time = Date.now();
            while(Date.now() - time < millis) {}
            return;
       }

       var code = data.code;
       var robot = new DummyRobot();

        try {
          eval(code);
        } catch (e) {
          // Null is thrown for infinite loop.
          // Otherwise, abnormal termination is a user error.
          if (e !== null) {
            alert(e);
          }
        }
      
   } else {
      gamejs.log('unknown todo');
   }
}
gamejs.ready(function() {
   gamejs.onEvent(handleEvent);
})
