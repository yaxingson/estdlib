import { defineConfig } from 'vitest/config'

export default defineConfig({
  test:{
    environment:'jsdom',
    coverage: {
      enabled:true,
      provider: 'istanbul',
      reporter:['html', 'json'],
      include:['lib/*']
    }
  }
})
