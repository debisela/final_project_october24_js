import { Route, Routes, useLocation } from 'react-router-dom'
import IntroPage from './features/Welcome/IntroPage'
import Admin from './features/Admin/Admin'
import User from './features/User/User'
import Header from './features/Header/Header'

function App() {
  const location = useLocation()
 

  return (
    <>
      {location.pathname !=='/' && <Header/>}
     <Routes>
     <Route path="/" element={<IntroPage/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/admin" element={<Admin/>}/>
     </Routes>
    </>
  )
}

export default App
