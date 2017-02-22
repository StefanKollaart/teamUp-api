'use strict';

const service = require('feathers-mongoose');
const pair = require('./pair-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: pair,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/pair', service(options));

  // Get our initialize service to that we can bind hooks
  const pairService = app.service('/pair');

  // Set up our before hooks
  pairService.before(hooks.before);

  // Set up our after hooks
  pairService.after(hooks.after);
};
