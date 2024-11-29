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

## Features

- 💪 Write in typescript
- 📦 Use native ESM to achieve a smaller packaging volume

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
import * as estdlib from 'estdlib'
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
  import * as estdlib from 'https://unpkg.com/estdlib@latest/dist/estdlib.esm.js'

</script>

```

### Download

- `unpkg`
- `jsdelivr`

## Support

Estdlib is released under the MIT license & supports modern environments.
