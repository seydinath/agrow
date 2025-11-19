import sharp from 'sharp'
import { existsSync } from 'fs'

const INPUT = 'public/logo-awe.png'
if (!existsSync(INPUT)) {
  console.error(`Missing ${INPUT}. Place the PNG logo before running.`)
  process.exit(1)
}

async function run() {
  await sharp(INPUT).resize(256).toFormat('webp', { quality: 85 }).toFile('public/logo-awe.webp')
  await sharp(INPUT).resize(256).toFormat('avif', { quality: 50 }).toFile('public/logo-awe.avif')
  console.log('Generated: public/logo-awe.webp, public/logo-awe.avif')
}
run().catch(e => { console.error(e); process.exit(1) })
