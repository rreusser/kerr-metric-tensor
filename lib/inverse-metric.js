'use strict'

module.exports = function (x, M, a) {
  // Coordinates are x = (t, r, theta, phi)
  // var t = x[0]
  var r = x[1]
  var r2 = r * r
  var theta = x[2]
  // var phi = x[3]
  var a2 = a * a

  // Cos theta, sin theta:
  var ctheta = Math.cos(theta)
  var stheta = Math.sin(theta)
  var s2theta = stheta * stheta

  // Sigma :=
  var Sigma = r2 + a2 + ctheta * ctheta
  var Delta = r2 - 2 * M * r + a2

  // 2 * M * r / Sigma =
  var tMroSigma = 2 * M * r / Sigma

  //
  // g    =
  //   tt
  var g__tt = -(r2 + a2 + tMroSigma * a2 * s2theta) / Delta

  //
  // g       =
  //   t phi
  var g__tphi = -tMroSigma / Delta * a

  //
  // g         =
  //   phi phi
  var g__phiphi = (Delta - a2 * s2theta) / (Sigma * Delta * s2theta)

  return [
    /* eslint-disable */
      g__tt,              0,         0,    g__tphi,
          0,  Delta / Sigma,         0,          0,
          0,              0, 1 / Sigma,          0,
    g__tphi,              0,          0, g__phiphi
    /* eslint-enable */
  ]
}
