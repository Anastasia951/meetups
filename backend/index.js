import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import { createMeetup, getAllMeetups } from './controllers/MeetupController.js'

dotenv.config()

mongoose.connect(process.env.API_URL).then(() => {
  console.log('Connected to DB')
})


const app = express()
app.use(express.json())
app.get('/meetups', getAllMeetups)
app.post('/create-meetup', createMeetup)
app.listen(5000, () => {
  console.log('Worked')
})