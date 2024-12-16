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

![](https://img.shields.io/bundlephobia/minzip/estdlib?label=minzipped)
![](https://codecov.io/gh/toss/estdlib/graph/badge.svg?token=8N5S3AR3C7)
![](https://img.shields.io/npm/dm/estdlib.svg)
![](https://img.shields.io/npm/v/estdlib.svg)
![](https://img.shields.io/npm/l/estdlib.svg)

## Features

- 💪 Type strong, write in typescript
- 📦 Use native ESM to achieve a smaller packaging volume
- 🚀 Excellent performance

## Get Started

### Install

```shell
# npm
npm i estdlib --save

# pnpm
pnpm add estdlib

```

### Usage

1. `esm`

```js
import * as _ from 'estdlib'
import { first, isBoolean, add } from 'estdlib'

import * as assert from 'estdlib/assert'
import { isArray, isBoolean } from 'estdlib/assert'

```

2. `cjs`

```js
const estdlib = require('estdlib')
const { head, isBoolean, add } = require('estdlib')

const assert = require('estdlib/assert')
const { isArray, isBoolean } = require('estdlib/assert')

```

3. `cdn`

```html
<!-- <script src="https://unpkg.com/estdlib@latest/dist/estdlib.min.js"></script> -->
<script src="https://unpkg.com/estdlib@latest/dist/estdlib.js"></script>
<script type="module">
  import * as _ from 'https://unpkg.com/estdlib@latest/dist/estdlib.esm.js'

</script>

```

> See the full documentation [here](https://github.com/yaxingson/estdlib/wiki)

### Download

- `unpkg`
- `jsdelivr`

## Support

Tested in Chrome 74-75, Firefox 66-67, IE 11, Edge 18, Safari 11-12, & Node.js 8-12. 

Automated [browser]() & [CI]() test runs are available.
