/** @type {Partial<import("typedoc").TypeDocOptions>} */
const config = {
  entryPoints:[
    'src/array/index.ts',
    'src/assert/index.ts',
    'src/async/index.ts',
    'src/date/index.ts',
    'src/error/index.ts',
    'src/function/index.ts',
    'src/math/index.ts',
    'src/object/index.ts',
    'src/string/index.ts',
    'src/utility/index.ts'
  ],
  out:'docs'
}

export default config
