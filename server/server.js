import './config/instrument.js'
import express from 'express'
import cors from 'cors' 
import 'dotenv/config' 
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node"
import { clerkWebhooks } from './controller/webhooks.js'
 const app = express() 

//  connect to db

await connectDB()
// Middlewares 
 app.use(cors()) 
 app.use(express.json())
//  Routes
  app.get('/', (req, res) => res.send("API Working"))
app.get("/debug-sentry", function mainHandler(re, res) {
    throw new Error ("My first error")
});

app.post('/webhooks', clerkWebhooks)
  const PORT = process.env.PORT || 5000
  Sentry.setupExpressErrorHandler(app)

  app.listen(PORT, () => {
    console.log(`server is runing on port ${PORT}`)
})