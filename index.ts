import express, { Application, Request, Response } from 'express'

const app: Application = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (_req: Request, res: Response) => {
  return res.status(200).send({
    message: 'Hello World!!',
  })
})

try {
  app.listen(PORT, () => {
    console.log(`Server running at: PORT=${PORT}`)
  })
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message)
  }
}
