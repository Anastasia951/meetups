import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import './Filters.scss'

const Filters = () => {
  return (
    <div className='filters'>
      <ul>
        <li className='active'>Все</li>
        <li>Прошедшие</li>
        <li>Ожидаемые</li>
      </ul>
      <form>
        <SearchIcon className='search-icon' />
        <input type='text' placeholder='Поиск' />
      </form>
    </div>
  )
}

export default Filters
