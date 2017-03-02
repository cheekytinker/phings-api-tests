var newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
  collection: require('./phings-api.postman_collection.json'),
  reporters: ['cli', 'html', 'junit'],
  reporter: {
    junit : { export : './xmlResults.xml' },
    html : { export : './htmlResults.html' },
  },
  environment: require('./phings-api.postman_environment.json'),
}, function (err) {
  if (err) { throw err; }
  console.log('collection run complete!');
});
