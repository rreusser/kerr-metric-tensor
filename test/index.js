/* global describe, it */
'use strict'

var assert = require('chai').assert
var ndt = require('ndarray-tests')
var ndarray = require('ndarray')
var kerr = require('../')

describe('kerr', function () {
  it('calculates the metric', function () {
    var result = ndarray(kerr([1, 0, 0, 0], 1, 1), [4, 4])
    var expected = ndarray([
      /* eslint-disable */
      -1, 0, 0, 0,
       0, 2, 0, 0,
       0, 0, 2, 0,
       0, 0, 0, 0], [4, 4])
      /* eslint-enable */
    assert(ndt.equal(result, expected))
  })
})
