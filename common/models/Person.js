module.exports = function (Person) {

  Person.greeting =async function (msg) {

    return 'Greeting is' + msg;
  }

  Person.remoteMethod(
    'greet', {
      accepts: {
        arg: 'msg',
        type: 'string'
      },
      returns: {
        arg: 'greeting',
        type: 'string'
      }

    });

};  