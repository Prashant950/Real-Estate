import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

function dbJsonPlugin() {
  const dbPath = path.resolve(process.cwd(), 'db.json')
  return {
    name: 'db-json-server',
    configureServer(server) {
      server.middlewares.use('/api/inquiries', (req, res) => {
        if (req.method === 'POST') {
          let body = ''
          req.on('data', (chunk) => {
            body += chunk
          })
          req.on('end', () => {
            try {
              const newInquiry = JSON.parse(body || '{}')
              let db = { inquiries: [] }
              if (fs.existsSync(dbPath)) {
                try {
                  db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'))
                  if (!Array.isArray(db.inquiries)) db.inquiries = []
                } catch {
                  db = { inquiries: [] }
                }
              }
              const entry = {
                id: `inq-${Date.now()}`,
                ...newInquiry,
                createdAt: new Date().toISOString(),
              }
              db.inquiries.unshift(entry)
              fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8')
              res.setHeader('Content-Type', 'application/json')
              res.statusCode = 200
              res.end(JSON.stringify({ success: true, inquiry: entry }))
            } catch (err) {
              res.statusCode = 500
              res.end(JSON.stringify({ error: err.message }))
            }
          })
        } else if (req.method === 'GET') {
          let db = { inquiries: [] }
          if (fs.existsSync(dbPath)) {
            try {
              db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'))
            } catch {
              // ignore
            }
          }
          res.setHeader('Content-Type', 'application/json')
          res.statusCode = 200
          res.end(JSON.stringify(db))
        } else {
          res.statusCode = 404
          res.end()
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dbJsonPlugin()],
})
