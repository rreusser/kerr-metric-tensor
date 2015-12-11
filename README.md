# kerr-metric-tensor

> Calculate the Kerr metric for a rotating black hole

## Introduction

This module calculates the metric tensor corresponding to the Kerr metric in Boyer-Lindquist coordinates <img alt="&lpar;t&comma; r&comma; &bsol;theta&comma; &bsol;phi&rpar;" valign="middle" src="images/t-r-theta-phi-e5242c759c.png" width="76" height="20"> [[1]](#references),

<p align="center"><img alt="g&lowbar;&lcub;&bsol;mu &bsol;nu&rcub; &equals; &bsol;left&lpar;&bsol;begin&lcub;array&rcub;&lcub;cccc&rcub; g&lowbar;&lcub;tt&rcub; &amp; 0 &amp; 0 &amp; g&lowbar;&lcub;t &bsol;phi&rcub; &bsol;&bsol; 0 &amp; &bsol;frac&lcub;&bsol;Sigma&rcub;&lcub;&bsol;Delta&rcub; &amp; 0 &amp; 0 &bsol;&bsol; 0 &amp; 0 &amp; &bsol;Sigma &amp; 0 &bsol;&bsol; g&lowbar;&lcub;t &bsol;phi&rcub; &amp; 0 &amp; 0 &amp; g&lowbar;&lcub;&bsol;phi &bsol;phi&rcub; &bsol;end&lcub;array&rcub;&bsol;right&rpar;" valign="middle" src="images/g_mu-nu-leftbeginarraycccc-g_tt-0-0-g_t-phi-0-0c6195d563.png" width="253" height="96.5"></p>

where

<p align="center"><img alt="&bsol;begin&lcub;eqnarray&midast;&rcub; g&lowbar;&lcub;tt&rcub; &amp;&equals;&amp; - &bsol;left&lpar;1 - &bsol;frac&lcub;2 M r&rcub;&lcub;&bsol;Sigma&rcub; &bsol;right&rpar; &bsol;&bsol; g&lowbar;&lcub;t &bsol;phi&rcub; &amp;&equals;&amp; - &bsol;frac&lcub;2 M r&rcub;&lcub;&bsol;Sigma&rcub; a &bsol;sin&Hat;2 &bsol;theta &bsol;&bsol; g&lowbar;&lcub;&bsol;phi &bsol;phi&rcub; &amp;&equals;&amp; &bsol;left&lsqb; r&Hat;2 &plus; a&Hat;2 &plus; &bsol;frac&lcub;2 M r a&Hat;2&rcub;&lcub;&bsol;Sigma&rcub; &bsol;sin&Hat;2 &bsol;theta &bsol;right&rsqb; &bsol;sin&Hat;2 &bsol;theta  &bsol;end&lcub;eqnarray&midast;&rcub;" valign="middle" src="images/begineqnarray-g_tt-left1-frac2-m-rsigma-right-e6fbdd3212.png" width="357.5" height="153.5"></p>

and

<p align="center"><img alt="&bsol;begin&lcub;eqnarray&midast;&rcub; &bsol;Delta&lpar;r&rpar; &amp;&bsol;equiv&amp; r&Hat;2 - 2 M r &plus; a&Hat;2  &bsol;&bsol; &bsol;Sigma&lpar;r&comma;&bsol;theta&rpar; &amp;&bsol;equiv&amp; r&Hat;2 &plus; a&Hat;2 &bsol;cos&Hat;2 &bsol;theta &bsol;end&lcub;eqnarray&midast;&rcub;&period;" valign="middle" src="images/begineqnarray-deltar-equiv-r2-2-m-r-a2-sigmar-b108a790ce.png" width="237.5" height="91.5"></p>

If you're after efficiency, you'd probably just want to calculate and use the unique non-zero components manually, but this is convenient, easy, and once adequately tested, hopefully correct.

## Installation

**Note: I'm just playing around. This module is not adequately tested and so it not on npm.**

```bash
$ # npm install kerr-metric-tensor
```

## Usage

#### `require('kerr-metric-tensor')(x, M, a)`
Given an `Array` or typed array containing coordinates <img alt="x &equals; &lpar;t&comma; r&comma; &bsol;theta&comma; &bsol;phi&rpar;" valign="middle" src="images/x-t-r-theta-phi-115f834ef8.png" width="115" height="20">, calculate the Kerr metric for a black hole with parameters <img alt="M" valign="middle" src="images/m-880e957990.png" width="20.5" height="14"> and <img alt="a" valign="middle" src="images/a-2217a6870d.png" width="9.5" height="9.5">, where <img alt="M" valign="middle" src="images/m-880e957990.png" width="20.5" height="14"> represents the mass of the black hole and <img alt="Ma" valign="middle" src="images/ma-20d367b52c.png" width="31" height="14.5"> the angular momentum.

**Returns**: the sixteen components of the metric tensor. Since the tensor is symmetric, you can think of the ordering as either row-major or column-major.

## Example

```javascript
var kerr = require('kerr-metric-tensor')

kerr([1,0,0,0], 1, 1)

// => [ -1, 0, 0, 0,
//       0, 2, 0, 0,
//       0, 0, 2, 0,
//       0, 0, 0, 0 ]
```

## References

[[1]](#references) Ferrari, V., Gualtieri, L. (2015). *General Relativity* [PDF document]. Retrieved from [http://www.roma1.infn.it/teongrav/VALERIA/TEACHING/RELATIVITA_GENERALE/AA2015_16/dispense.pdf](http://www.roma1.infn.it/teongrav/VALERIA/TEACHING/RELATIVITA_GENERALE/AA2015_16/dispense.pdf)

## License

Copyright (c) 2015, Ricky Reusser