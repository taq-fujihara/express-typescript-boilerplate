import { readFileSync } from 'fs'
import express, { Application, Request, Response } from 'express'
import swaggerUi, { JsonObject } from 'swagger-ui-express'
import yaml from 'js-yaml'

const app: Application = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (_req: Request, res: Response) => {
  return res.status(200).send({
    message: 'Hello World!!',
  })
})

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(
    yaml.load(
      readFileSync('./src/openapi.yaml').toString('utf-8'),
    ) as JsonObject,
  ),
)

app.listen(PORT, () => {
  console.log(`Server running at: PORT=${PORT}`)
})
