import React, { ChangeEvent, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import styles from './SearchInput.module.scss'
import { useDebounce } from '../../hooks/useDebounce'
import { setSearchField } from '../../redux/slices/meetupsSlice'
import { useAppDispatch } from '../../redux/store'
const SearchInput = () => {
  const dispatch = useAppDispatch()
  const [val, setVal] = useState<string>('')
  const debounced = useDebounce(val)
  const findMeetupsByTitle = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setVal(event.target.value)
  }
  useEffect(() => {
    dispatch(setSearchField(debounced))
  }, [debounced])
  return (
    <div className={styles.form}>
      <SearchIcon className={styles.searchIcon} />
      <input
        onChange={findMeetupsByTitle}
        value={val}
        type='text'
        placeholder='Поиск'
        className={styles.searchInput}
      />
    </div>
  )
}

export default SearchInput
