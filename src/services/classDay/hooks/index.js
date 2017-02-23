'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const common = require('feathers-hooks-common');


const populateallStudents = common.populate('allStudents', {service: 'users'})
const populatepickableStudents = common.populate('pickableStudents', {service: 'users'})
const populatePairs = common.populate('pairs', {service: 'pairs'})

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  update: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  patch: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  remove: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ]
};

exports.after = {
  all: [
    populatepickableStudents,
    populateallStudents,
    populatePairs,
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
