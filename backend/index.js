import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"

dotenv.config()

mongoose.connect(process.env.API_URL).then(() => {
  console.log('Connected to DB')
})

const app = express()

app.listen(5000, () => {
  console.log('Worked')
})