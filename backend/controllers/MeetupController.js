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
export const getMeetupById = async (req, res) => {
  try {
    const { id } = req.query
    const meetup = await MeetupModel.findById(id).populate('owner').exec()
    res.json(meetup)
  } catch (e) {
    console.log(e.message)
    res.status(400).json(e)
  }
}

export const createMeetup = async (req, res) => {
  try {
    let { title, date, place, description, owner } = req.body

    const newMeetup = new MeetupModel({
      owner,
      title,
      date,
      place,
      description,
    })
    const meetup = await newMeetup.save()
    res.json(meetup)
  } catch (e) {
    console.log(e.message)
    res.status(400).json(e)
  }
}
