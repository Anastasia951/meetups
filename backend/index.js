import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import cors from 'cors'
import { createMeetup, getAllMeetups } from './controllers/MeetupController.js'
import { login, register } from './controllers/UserController.js'
import { loginValidator, registerValidator } from './validators/index.js'
import { checkErrors } from './utils/checkErrors.js'

dotenv.config()

mongoose.connect(process.env.API_URL).then(() => {
  console.log('Connected to DB')
})

const app = express()
app.use(cors({
  origin: '*'
}))
app.use(express.json())

app.get('/meetups', getAllMeetups)
app.post('/meetups', createMeetup)

app.post('/register', registerValidator, checkErrors, register)
app.post('/login', loginValidator, checkErrors, login)
app.listen(5000, () => {
  console.log('Worked')
})