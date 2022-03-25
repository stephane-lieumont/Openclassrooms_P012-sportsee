import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Header from './layout/Header'
import SideBar from './layout/Sidebar'

import Profile from './pages/Profile'
import EmptyInDev from './pages/EmptyInDev'

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>      
      <Header/>
      <div className="main-container">
        <SideBar/>        
        <main>
          <Routes>  
            <Route path="/" element={<EmptyInDev />} />
            <Route path="/profil/:userId" element={<Profile />} />
            <Route path="/reglage" element={<EmptyInDev />}/>
            <Route path="/communaute" element={<EmptyInDev />}/>
            <Route path="*"/>
          </Routes>
        </main>  
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
