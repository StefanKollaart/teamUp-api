'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('classDay service', function() {
  it('registered the classDays service', () => {
    assert.ok(app.service('classDays'));
  });
});
