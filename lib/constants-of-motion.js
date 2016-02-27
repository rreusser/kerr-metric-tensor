'use strict'

module.exports = function(x__i, xd__i) {
  // Metric tensor
  var g_ij = $nd(kerr($a(x__i), M, a), [4,4])
  var g__ij = $nd(inverseKerr($a(x__i), M, a), [4,4])

  console.log('g_ij =\n',show(g_ij))

  // Normalization
  var l2 = vmv(u__i, g_ij, u__i)
  var kappa = Math.sign(l2)
  var l = Math.sqrt(l2 * kappa)
  ops.divseq(u__i, l)

  // Compute the canonical momentum
  var p_i = pool.zeros(x__i.shape, 'float64')
  gemv(1, g_ij, u__i, 0, p_i)

  // Compute the covariant momenrum
  var p__i = pool.zeros(x__i.shape, 'float64')
  gemv(1, g__ij, p_i, 0, p__i)
  ops.mulseq(p__i, -1)
}
