'use strict';

module.exports = function (Review) {

  Review.Greeting = function (msg, cb) {
    cb(null, 'greeting is ' + msg);
    console.log(msg);


  }

  Review.remoteMethod('message', {
    http: {
      path: '/great',
      verb: 'get'
    },
   return: {
      arg: 'message',
      type: 'string '
    }

  });
};
