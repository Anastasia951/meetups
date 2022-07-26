import React, { useEffect, useState } from 'react'
import { fetchAllMeetups } from '../../redux/slices/meetupsSlice'
import { useAppDispatch } from '../../redux/store'
import MeetupUI from '../MeetupUI/MeetupUI'

import './Meetups.scss'

const Header = () => {
  const dispatch = useAppDispatch()
  const [meetups, setMeetups] = useState([])
  useEffect(() => {
    dispatch(fetchAllMeetups()).then(result => setMeetups(result.payload))
  }, [])
  return (
    <section className='meetups'>
      {meetups.map(meetup => (
        <MeetupUI meetup={meetup} />
      ))}
    </section>
  )
}

export default Header
