import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../constants/routes'
import { getCurrentDate } from '../../utils/getCurrentDate'

import './CreateMeetup.scss'

const Login = () => {
  return (
    <form className='form__create-meetup'>
      <div className='content'>
        <h2 className='form__title'>Создание митапа</h2>
        <div className='field'>
          <label>Название</label>
          <input type='text' />
        </div>
        <div className='field'>
          <label>Дата</label>
          <input type='date' defaultValue={getCurrentDate()} />
        </div>
        <div className='field'>
          <label>Место проведения</label>
          <input type='text' />
        </div>
        <div className='field'>
          <label>Описание</label>
          <textarea rows={6} />
        </div>
      </div>
      <div className='actions'>
        <button className='form__cancel'>
          <Link to={routes.Home}>Отмена</Link>
        </button>
        <button type='submit' className='form__submit'>
          Создать
        </button>
      </div>
    </form>
  )
}

export default Login
