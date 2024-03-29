import express, {Request, Response} from 'express'
import React from 'react'
import reactDomServer from 'react-dom/server'
import Home from './components/Home'

const PORT = 3000

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send(reactDomServer.renderToString(<Home/>))
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
