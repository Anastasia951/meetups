import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Footer, Header } from './components'
import { routes } from './constants/routes'
import { Login, Register, CreateMeetup, Home, MyMeetups } from './pages'
import { fetchMe } from './redux/slices/authSlice'
import { fetchAllMeetups } from './redux/slices/meetupsSlice'
import { useAppDispatch } from './redux/store'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllMeetups())
    dispatch(fetchMe())
  }, [])
  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route path={routes.Home} element={<Home />} />
          <Route path={routes.Login} element={<Login />} />
          <Route path={routes.Register} element={<Register />} />
          <Route path={routes.CreateMeetup} element={<CreateMeetup />} />
          <Route path={routes.MyMeetups} element={<MyMeetups />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
