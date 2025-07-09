import React from 'react'
import {Routes,Route} from "react-router-dom"
import UserPage from './components/UserPage'
import PhotoPage from './components/PhotoPage'
import UserDetail from "./components/UserDetail"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<UserPage />} />
      <Route path='/users' element={<UserPage />} />
      <Route path="/users/:id" element={<UserDetail />} />
      <Route path='/photos' element={<PhotoPage />} />
    </Routes>
  )
}

export default App