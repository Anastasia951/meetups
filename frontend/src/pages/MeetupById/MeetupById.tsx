import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMeetup } from '../../constants'
import { fetchMeetupById } from '../../redux/slices/meetupsSlice'
import { useAppDispatch } from '../../redux/store'
import './Meetups.scss'
const MeetupById = () => {
  const [meetup, setMeetup] = useState<IMeetup>(null)
  const dispatch = useAppDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(fetchMeetupById(id)).then(({ payload }) => setMeetup(payload))
  }, [])
  if (meetup) {
    return (
      <div className='meetup-nogrid'>
        <div className='meetup-nogrid__image _ibg'>
          <img
            src='https://images.unsplash.com/photo-1516617442634-75371039cb3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
            alt=''
          />
          <div className='meetup-nogrid__title'>{meetup.title}</div>
        </div>
        <div className='meetup__info'>
          <div className='meetup__description'>{meetup.description}</div>
          <ul>
            <li>{meetup.owner.name}</li> <li>{meetup.place}</li>{' '}
            <li>{meetup.date}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MeetupById
