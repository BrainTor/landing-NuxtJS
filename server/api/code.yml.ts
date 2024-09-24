import { defineEventHandler, send } from 'h3'
import { readFile } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
    
  const filePath = join(process.cwd(), 'public', 'code.yml')

  const file = await readFile(filePath, 'utf-8')

  event.node.res.setHeader('Content-Type', 'application/xml')

  return send(event, file)
})
