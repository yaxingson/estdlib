import { defineConfig } from 'vitest/config'
import pkg from './package.json'

export default defineConfig({
  test: {
    name: pkg.name,
    environment: 'jsdom',
    include: ['lib/**/*.spec.ts'],
    watch: false,
    coverage: {
      provider: 'istanbul',
      reporter: 'html',
      include: ['lib/**/*'],
      exclude: ['lib/**/*.spec.ts', 'lib/**/index.ts'],
      reportOnFailure: true
    },
    benchmark: {
      include: ['perf/benchmarks/**/*.bench.ts']
    },
    deps: {
      optimizer: {
        ssr: {
          enabled: true,
          include: ['estdlib']
        }
      }
    }
  }
})
