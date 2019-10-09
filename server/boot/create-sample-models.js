var async = require('async');

module.exports = function (app) {

  var mongoDb = app.dataSources.mongoDS2;

  async.parallel({

    reviewers: async.apply(createReviewers),
    cofees: async.apply(createcoffeShops),

  }, function (err, results) {
    if (err) throw err;
    createReviews(results.reviewers, results.cofees, function (err) {
      console.log('model created successfully!!!!!!!!!!');
    });

  });


  function createReviewers(cb) {

    mongoDb.automigrate('Reviewer', function (err) {

      if (err) return cb(err);

      var Reviewer = app.models.Reviewer;


      Reviewer.create([

        {
          userName: 'abhishek.halkude123@gmail.com',
          password: '1234455dA'

        },
        {
          userName: 'quantela123@gmail.com',
          password: 'asdfgbnm123'
        },
        {
          userName: 'parad212@gmail.com',
          password: 'qwerrtyui12'
        },
        {

          userName: 'qmnbvcc@gmail.com',
          password: 'fy!234?'
        }
      ])
    })
  }

  function createcoffeShops(cb) {

    mongoDb.automigrate('coffeShop', function (err) {

      var coffeshop = app.models.coffeShop;
      coffeshop.create([{
          name: 'durga',
          city: 'amsterdam'

        },
        {
          name: 'starbucks',
          city: 'hyderabad'
        },
        {
          name: 'CCD',
          city: 'bangalore'

        },
      ], cb);
    });
  }

  function createReviews(reviewers, cofees, cb) {

    mongoDb.automigrate('Review', function (err) {

      if (err) return cb(err);

      var review = app.models.Review;
      review.create([{
          date: Date.now(),
          rating: 2,
          comments: 'this is not a good coffee shop',
          message: 'please provide the proper dishes while,  it is proivided in normal glass',
          publisherId: reviewers[0].id,
          coffeeShopId: cofees[0].id
        },
        {
          date: date.now(),
          rating: 5,
          comments: 'it was a good coffee',
          message: 'there should be some music they have to place. Other wise a good place to visit',
          publisherId: reviewers[1].id,
          coffeeShopId: cofees[1].id
        },
        {
          date: date.now(),
          rating: 1,
          comments: 'Not at all a coffee things if you are a coffee lover',
          message: `'It is a cofeee? i don't think soo!'`,
          publisherId: reviewers[2].id,
          coffeeShopId: cofees[2].id
        }
      ], cb);
    })

  }
}
