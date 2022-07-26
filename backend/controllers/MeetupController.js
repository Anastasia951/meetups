import MeetupModel from '../models/Meetup.js'

export const getAllMeetups = async (req, res) => {
  try {
    const meetups = await MeetupModel.find().populate('owner').exec()
    res.json(meetups)
  } catch (e) {
    console.log(e.message)
    res.status(400).json(e)
  }
}

export const createMeetup = async (req, res) => {
  try {
    let { title, date, place, description, program, owner } = req.body
    if (!Array.isArray(program) || !program.length) program = []

    const newMeetup = new MeetupModel({
      owner,
      title,
      date,
      place,
      description,
      program
    })
    const meetup = await newMeetup.save()
    res.json(meetup)
  } catch (e) {
    console.log(e.message)
    res.status(400).json(e)
  }
}
