'use strict';

const service = require('feathers-mongoose');
const classDay = require('./classDay-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: classDay,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/classDays', service(options));

  // Get our initialize service to that we can bind hooks
  const classDayService = app.service('/classDays');

  // Set up our before hooks
  classDayService.before(hooks.before);

  // Set up our after hooks
  classDayService.after(hooks.after);
};
