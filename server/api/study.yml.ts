import { defineEventHandler, send } from 'h3'
import { readFile } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  const filePath = join(process.cwd(), 'public', 'study.yml')
  // Чтение файла
  const file = await readFile(filePath, 'utf-8')
  // Устанавливаем заголовок Content-Type как application/xml
  event.node.res.setHeader('Content-Type', 'application/xml')
  // Возвращаем содержимое файла
  return send(event, file)
})
