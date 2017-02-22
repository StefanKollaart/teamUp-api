'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('pair service', function() {
  it('registered the pair service', () => {
    assert.ok(app.service('pair'));
  });
});
