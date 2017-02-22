'use strict';

const service = require('feathers-mongoose');
const classDays = require('./classDays-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: classDays,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/classDays', service(options));

  // Get our initialize service to that we can bind hooks
  const classDaysService = app.service('/classDays');

  // Set up our before hooks
  classDaysService.before(hooks.before);

  // Set up our after hooks
  classDaysService.after(hooks.after);
};
