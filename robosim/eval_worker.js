
var gamejs = require('gamejs');

var handleEvent = function(data) {
   if (data.todo === 'nextprimes') {
      gamejs.worker.post(data);    
   } else {
      gamejs.log('unknown todo');
   }
}

gamejs.ready(function() {
   gamejs.onEvent(handleEvent);
});



//  var gamejs = require('gamejs');

//  var handleEvent = function(data) {
//     if (data.todo === 'nextprimes') {
//        gamejs.worker.post(data);    
//     } else {
//        gamejs.log('unknown todo');
//     }
//  }

 //if (data.todo === 'eval') {
 //    gamejs.log('stuff to be evaled', data.code);
 //     
 //    function waiter(millis) {
 //         var time = Date.now();
 //         while(Date.now() - time < millis) {}
 //         return;
 //    }

 //    var code = data.code;
 //    var robot = new DummyRobot();

 //     try {
 //       eval(code);
 //     } catch (e) {
 //       // Null is thrown for infinite loop.
 //       // Otherwise, abnormal termination is a user error.
 //       if (e !== null) {
 //         alert(e);
 //       }
 //     }
 //   
 //} else {
 //   gamejs.log('unknown todo');
 //}
 
//  gamejs.ready(function() {
//     gamejs.onEvent(handleEvent);
//  });
