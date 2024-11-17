```

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

## Get Started

### Install

```shell
# npm
npm i estdlib --save

# pnpm
pnpm add estdlib

```

### Usage

1. commonjs

```js
const estdlib = require('estdlib')
const { head, isBoolean, add } = require('estdlib')

const assert = require('estdlib/assert')
const { isArray, isBoolean } = require('estdlib/assert')

```

2. esm

```js
import * as estdlib from 'estdlib'
import { head, isBoolean, add } from 'estdlib'

import * as assert from 'estdlib/assert'
import { isArray, isBoolean } from 'estdlib/assert'

```

3. script

```html
<!-- <script src="https://unpkg.com/estdlib@0.0.1/estdlib.min.js"></script> -->
<script src="https://unpkg.com/estdlib@0.0.1/estdlib.js"></script>
<script>
	
</script>

```

### Download

- [estdlib.js](https://unpkg.com/estdlib@0.0.1/estdlib.js)
- [estdlib.min.js](https://unpkg.com/estdlib@0.0.1/estdlib.min.js) 

## Features

| categories |  methods  |
|  -----      |  -----    |
| array     | [chunk]()、 [compact]()、[drop]()、[head]()   |
| assert	| [isArray]()、[isBoolean]()、[isDate]()  |
| date | |
| math | [add]() | 
| object | | 

## Support

Estdlib is released under the MIT license & supports modern environments.

