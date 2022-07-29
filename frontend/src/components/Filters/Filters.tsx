import React, { useState, useMemo } from 'react'
import './Filters.scss'
import SearchInput from '../SearchInput/SearchInput'

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
      <SearchInput />
    </div>
  )
}

export default Filters
