import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || 'https://memoriasismoscalei.example').replace(/\/+$/, '')

  function seoPlugin() {
    return {
      name: 'memoria-seo',
      closeBundle() {
        const outDir = resolve(rootDir, 'dist')
        mkdirSync(outDir, { recursive: true })
        const lastmod = new Date().toISOString().slice(0, 10)

        writeFileSync(
          resolve(outDir, 'robots.txt'),
          `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
        )

        writeFileSync(
          resolve(outDir, 'sitemap.xml'),
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
            `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
            `  <url>\n` +
            `    <loc>${siteUrl}/</loc>\n` +
            `    <lastmod>${lastmod}</lastmod>\n` +
            `    <changefreq>monthly</changefreq>\n` +
            `    <priority>1.0</priority>\n` +
            `  </url>\n` +
            `</urlset>\n`,
        )
      },
    }
  }

  return {
    plugins: [react(), seoPlugin()],
  }
})