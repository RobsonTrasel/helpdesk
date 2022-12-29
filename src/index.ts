import express, { Request, Response} from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
app.get('/', (req: Request, res: Response) => res.send('Hello, world'))


app.listen(3000, () => {
  console.log('[Server] started successfully!')
})