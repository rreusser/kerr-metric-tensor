/* global describe, it */
'use strict'

var assert = require('chai').assert
var ndt = require('ndarray-tests')
var ndarray = require('ndarray')
var kerr = require('../')

describe('kerr-metric-tensor-inverse', function () {
  it('calculates the metric', function () {
    var result = kerr.inverseMetric([1, 1, Math.PI * 0.5, 0], 2, 0)
    var expected = ndarray([
      /* eslint-disable */
      0.3333333333333333, 0, 0, 0,
      0, -3, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
      /* eslint-enable */
    ], [4, 4])
    assert(ndt.equal(ndarray(result, [4, 4]), expected))
  })
})
