import { readdir } from 'node:fs/promises'
import { statSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'tsup'

const srcDir = join(__dirname, 'src')

export default defineConfig(async () => {
  const dirs = await readdir(srcDir)
  const entry = dirs.map(dir => statSync(join(srcDir, dir)).isFile() 
    ? `src/${dir}` 
    : `src/${dir}/index.ts`
  )

  return {
    entry,    
    format:['iife', 'cjs', 'esm'],
    globalName:'sak',
  }
})
