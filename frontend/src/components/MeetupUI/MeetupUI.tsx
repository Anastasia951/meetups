import React from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../constants/routes'
import './Meetups.scss'
const MeetupUI = ({ meetup }) => {
  const navigate = useNavigate()
  const openMeetup = () => {
    navigate(`${routes.MeetupById}/${meetup._id}`)
  }
  return (
    <div className='meetup' key={meetup._id} onClick={openMeetup}>
      <div className='meetup__image _ibg'>
        <img
          src='https://images.unsplash.com/photo-1516617442634-75371039cb3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
          alt=''
        />
        <div className='meetup__title'>{meetup.title}</div>
      </div>
      <div className='meetup__info'>
        <ul>
          <li>{meetup.owner.name}</li> <li>{meetup.place}</li>{' '}
          <li>{meetup.date}</li>
        </ul>
      </div>
    </div>
  )
}

export default MeetupUI
