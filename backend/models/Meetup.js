import mongoose from 'mongoose'

const MeetupSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    requred: true,
  },
  date: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  program: [
    {
      meaning: {
        type: String,
        required: true,
      },
      beginsAt: {
        type: String,
        required: true,
      },
      endsAt: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
})

export default mongoose.model('Meetup', MeetupSchema)
