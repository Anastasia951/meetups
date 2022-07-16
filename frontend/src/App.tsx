import { Routes, Route } from 'react-router-dom'
import { Footer, Header } from './components'
import { routes } from './constants/routes'
import { Login, Register, CreateMeetup, Home } from './pages'

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route path={routes.Home} element={<Home />} />
          <Route path={routes.Login} element={<Login />} />
          <Route path={routes.Register} element={<Register />} />
          <Route path={routes.CreateMeetup} element={<CreateMeetup />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
