'use strict';

module.exports = function (coffeShop){

}

module.exports = function (coffeShop) {

  coffeShop.status = function (cb) {  
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var OPEN_HOUR = 6;
    var CLOSE_HOUR = 20;
    console.log('Current hour is %d', currentHour);
    var response;
    if (currentHour >= OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = 'We are open for business.';
    } else {
      response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    }
    cb(null, response);
  };


  coffeShop.getName = function (ids, cb) {
    coffeShop.findById(ids, function (err, instance) {
      var response = "Name of coffee shop is " + instance.name;
      cb(null, response);
      console.log(response);
    });
  }


  coffeShop.getCity = function (ids, cb) {

    coffeShop.findById(ids, function (err, instanceis) {

      var response = "city of the  coffee shop is " + instanceis.city;
      cb(null, response);
      console.log(response);
    });

  }
  coffeShop.getAll = function (cb) {


    coffeShop.find(function (instance) {

      var response = "the all data is here" + instance;

      cb(null, instance);
      console.log(instance);

    });

  }

  coffeShop.remoteMethod(
    'getAll', {
  http: {  path:'/getAll', verb: 'get' },
  returns: {  arg:'getAll', type:'string' }
  }

  );




  coffeShop.remoteMethod(
    'status', {
      http: {
        path: '/status',
        verb: 'get'
      },
      returns: {
        arg: 'status',
        type: 'string'
      }
    }

  );

  coffeShop.remoteMethod(
    'getName', {
      http: {
        path: '/getname',
        verb: 'get'
      },
      accepts: {
        arg: 'id',
        type: 'string',
        required: true,
        http: {
          source: 'query'
        }
      },
      returns: {
        arg: 'name',
        type: 'string'
      }
    }

  );
  coffeShop.remoteMethod(

    'getCity', {

      http: {
        path: '/city',
        verb: 'get'
      },

      accepts: {
        arg: 'id',
        type: 'string',
        required: 'true',
        http: {
          source: 'query'
        }
      },
      returns: {
        arg: 'city',
        type: 'string'

      }
    }
  );
}
