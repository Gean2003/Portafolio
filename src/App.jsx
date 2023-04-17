import { Route, Routes, useLocation } from 'react-router-dom'
import ProfileLayout from './layout/ProfileLayout'
import Projects from './pages/Projects'
import Abilities from './pages/Abilities'
import ContactMe from './pages/ContactMe'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()

  return (
    <div>
      <AnimatePresence mode='wait' >
      <Routes key={location.pathname} location={location} >
        <Route path='/' element={ <ProfileLayout />  } >
          <Route path='/abilities' element={ <Abilities /> } />
          <Route path='/projects' element={ <Projects /> } />
          <Route path='/contact' element={ <ContactMe /> } />
        </Route>
      </ Routes>
      </ AnimatePresence >
    </div>
  )
}

export default App
