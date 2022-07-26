import React from 'react'
import './Meetups.scss'
const MeetupUI = ({ meetup }) => {
  return (
    <div className='meetup' key={meetup._id}>
      <div className='meetup__image _ibg'>
        <img
          src='https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
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
