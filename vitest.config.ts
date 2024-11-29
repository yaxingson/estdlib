import { defineConfig } from 'vitest/config'
import pkg from './package.json'

export default defineConfig({
  test: {
    name: pkg.name,
    environment: 'jsdom',
    include: ['lib/**/*.spec.ts'],
    exclude: ['lib/**/index.ts'],
    watch: false,
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: ['html', 'json'],
      include: ['lib/**/*'],
      exclude: ['lib/**/*.spec.ts'],
      reportOnFailure: true
    },
    deps: {},
    benchmark: {
      include: ['./benchmarks/**/*.bench.ts']
    }
  }
})
