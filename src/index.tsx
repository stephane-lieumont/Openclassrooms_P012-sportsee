import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Navigate } from 'react-router'

/**
 * Import Layout Components
 */
import Header from './layout/Header'
import SideBar from './layout/Sidebar'

/**
 * Import Pages Components
 */
import Profile from './pages/Profile'
import Error404 from './pages/Error404'

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>      
      <Header/>
      <div className="main-container">
        <SideBar/>        
        <main>
          <Routes>  
            <Route path="/" element={<Navigate to="/profil/12/Karl" />}/>{/* Redirect to profil 12 page */}
            <Route path="/profil/:userId/:firstname" element={<Profile />} />
            <Route path="/reglage" element={<Navigate to="/profil/12/Karl" />}/>{/* Redirect to profil 12 page */}
            <Route path="/communaute" element={<Navigate to="/profil/12/Karl" />}/>{/* Redirect to profil 12 page */}
            <Route path="*" element={<Error404 />}/>
          </Routes>
        </main>  
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
