'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('classDays service', function() {
  it('registered the classDays service', () => {
    assert.ok(app.service('classDays'));
  });
});
