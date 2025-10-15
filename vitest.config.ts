import { defineConfig } from 'vitest/config'

export default defineConfig({
  test:{
    globals:true,
    include:['src\/**\/tests/*.spec.ts'],
    benchmark:{
      include:['src\/**\/benchmarks/*.bench.ts'],
      reporters:'default',
    },
    reporters:'html',
    watch:false,
    coverage:{
      provider:'istanbul'
    }
  }
})
