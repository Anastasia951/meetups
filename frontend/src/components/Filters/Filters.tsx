import React, { useState, useMemo } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import './Filters.scss'

const Filters = () => {
  const [active, setActive] = useState(0)
  const fields = useMemo(() => ['Все', 'Прошедшие', 'Ожидаемые'], [])
  const changeActive: (index: number) => void = index => setActive(index)
  return (
    <div className='filters'>
      <ul>
        {fields.map((field, index) => {
          return (
            <li
              key={field}
              onClick={() => changeActive(index)}
              className={index === active ? 'active' : ''}>
              {field}
            </li>
          )
        })}
      </ul>
      <form>
        <SearchIcon className='search-icon' />
        <input type='text' placeholder='Поиск' />
      </form>
    </div>
  )
}

export default Filters
