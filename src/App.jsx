import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Admin from './Pages/Admin'
import Error from './Pages/Error'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import User from './Pages/User'
function App() {
  

  return (
    <>
      <Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Home' element={<Home />} />
					<Route path='/Admin' element={<Admin />} />
					<Route path='/Shop' element={<Shop />} />
					<Route path='/User' element={<User />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</Router>
    </>
  )
}

export default App
