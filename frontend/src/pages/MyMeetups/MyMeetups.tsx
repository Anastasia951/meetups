import React from 'react'
import { MeetupUI } from '../../components'
import { Status } from '../../redux/slices/meetupsSlice'
import { useTypedSelector } from '../../redux/store'

function MyMeetups() {
  const userId = useTypedSelector(state => state.auth.user._id)
  const { meetups, status } = useTypedSelector(state => state.meetups)
  if (status === Status.Loaded) {
    return (
      <div className='meetups'>
        {meetups
          .filter(meetup => meetup.owner._id === userId)
          .map(meetup => (
            <MeetupUI key={meetup._id} meetup={meetup} />
          ))}
      </div>
    )
  }
}

export default MyMeetups
