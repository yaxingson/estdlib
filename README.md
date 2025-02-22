```plain

 _______   ________  _________  ________  ___       ___  ________
|\  ___ \ |\   ____\|\___   ___\\   ___ \|\  \     |\  \|\   __  \
\ \   __/|\ \  \___|\|___ \  \_\ \  \_|\ \ \  \    \ \  \ \  \|\ /_
 \ \  \_|/_\ \_____  \   \ \  \ \ \  \ \\ \ \  \    \ \  \ \   __  \
  \ \  \_|\ \|____|\  \   \ \  \ \ \  \_\\ \ \  \____\ \  \ \  \|\  \
   \ \_______\____\_\  \   \ \__\ \ \_______\ \_______\ \__\ \_______\
    \|_______|\_________\   \|__|  \|_______|\|_______|\|__|\|_______|
             \|_________|


```

The estdlib is a standard library for the browser and node.js built on modern ecmascript.

[![Build Status](https://github.com/ramda/ramda/workflows/Build/badge.svg)](https://github.com/ramda/ramda/actions?query=workflow%3ABuild)
[![NPM badge](https://img.shields.io/npm/v/estdlib?logo=npm)](https://www.npmjs.com/package/estdlib)
![](https://codecov.io/gh/toss/estdlib/graph/badge.svg?token=8N5S3AR3C7)
[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno&labelColor=black)](https://deno.land/x/ramda@v0.27.2)
[![JSR badge](https://jsr.io/badges/@es-toolkit/es-toolkit)](https://jsr.io/@es-toolkit/es-toolkit)

- 💪 Type strong, write in typescript
- 📦 Use native ESM to achieve a smaller packaging volume
- 🚀 Excellent performance
- 🛠️ Purer functional style

## Get Started

### Install

```shell
# npm
npm i estdlib --save

# pnpm
pnpm add estdlib

```

### Usage

1. ES Module

```js
import * as _ from 'estdlib'
import { first, isBoolean, add } from 'estdlib'

import * as assert from 'estdlib/assert'
import { isArray, isBoolean } from 'estdlib/assert'

import flatten from 'estdlib/array/flatten'

```

2. CommonJS

```js
const estdlib = require('estdlib')
const { head, isBoolean, add } = require('estdlib')

const assert = require('estdlib/assert')
const { isArray, isBoolean } = require('estdlib/assert')

```

3. CDN

```html
<!-- note that using latest is taking a significant risk that estdlib API changes could break your code -->
<!-- <script src="https://unpkg.com/estdlib@latest/dist/estdlib.min.js"></script> -->
<script src="https://unpkg.com/estdlib@latest/dist/estdlib.js"></script>
<script type="module">
  import * as _ from 'https://unpkg.com/estdlib@latest/dist/estdlib.esm.js'

</script>

```

4. Deno

```js
import * as R from "https://deno.land/x/estdlib@latest/mod.ts"

// using nest.land
import * as R from "https://x.nest.land/estdlib@latest/mod.ts"

```

> See the full documentation [here](https://github.com/yaxingson/estdlib/wiki)

## Download

- `unpkg`
- `jsdelivr`
- `cdnjs`

## Test & Benchmark

Running the test suite:

```sh
npm run test

```


## Support

Tested in Chrome 74-75, Firefox 66-67, IE 11, Edge 18, Safari 11-12, & Node.js 8-12. 

Automated [browser]() & [CI]() test runs are available.

## Contributing

Contributions are welcome and appreciated! Check out the [contributing guide]() before you dive in.


