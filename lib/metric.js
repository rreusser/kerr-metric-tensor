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
  var stheta2 = stheta * stheta

  // Sigma :=
  var Sigma = r2 + a2 * ctheta * ctheta

  var Delta = r2 - 2 * M * r + a2

  // 2 * M * r / Sigma =
  var tMroSigma = 2 * M * r / Sigma

  //
  // g    =
  //   tt
  var g_tt = -(1 - tMroSigma)

  //
  // g       =
  //   t phi
  var g_tphi = -tMroSigma * a * stheta2

  //
  // g         =
  //   phi phi
  var g_phiphi = stheta2 * (r2 + a2 * (1 + tMroSigma * stheta2))

  return [
    /* eslint-disable */
      g_tt,             0,     0,   g_tphi,
         0, Sigma / Delta,     0,        0,
         0,             0, Sigma,        0,
    g_tphi,             0,     0, g_phiphi
    /* eslint-enable */
  ]
}
