import dotenv from 'dotenv'
import express from 'express'
import 'reflect-metadata'
import container from '../inversify.config'
import MiscClass from './Application/misc'

// initialize configuration
dotenv.config()

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT

const app = express()
app.use(express.json())

const dummyApp: MiscClass = container.resolve<MiscClass>(MiscClass)

// define a route handler for the default home page
app.get('/', (request, response) => {
  response.json(dummyApp.doThings(2))
})

// app.post
// app.put
// app.delete

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})
