import React, { useEffect, useState } from 'react'
import { fetchAllMeetups } from '../../redux/slices/meetupsSlice'
import { useAppDispatch, useTypedSelector } from '../../redux/store'
import MeetupUI from '../MeetupUI/MeetupUI'

import './Meetups.scss'

const Header = () => {
  const searchField = useTypedSelector(state => state.meetups.searchField)
  const dispatch = useAppDispatch()
  const allMeetups = useTypedSelector(state => state.meetups.meetups)
  const [meetups, setMeetups] = useState([])
  useEffect(() => {
    const getAllMeetups = async () => {
      const meetups = await dispatch(fetchAllMeetups())
      setMeetups(meetups.payload)
    }
    getAllMeetups()
  }, [])

  useEffect(() => {
    if (searchField) {
      setMeetups(
        allMeetups.filter(meetup => meetup.title.includes(searchField))
      )
    } else {
      setMeetups(allMeetups)
    }
  }, [searchField])
  return (
    <section className='meetups'>
      {meetups.map(meetup => (
        <MeetupUI key={meetup._id} meetup={meetup} />
      ))}
    </section>
  )
}

export default Header
