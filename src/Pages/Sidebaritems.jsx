import React from 'react'
// import { BrowserRouter as Routers, Route,Routes} from 'react-router-dom'
import Tdashboard from '../Tdashboard'
import Allcourses from '../Pages/Allcourses'
import Allnotes from '../Pages/Allnotes'
import History from '../Pages/History'
import Setting from '../Pages/Setting'
import Logout from '../Pages/Logout'
import '../sidebar.css';


export default function Sidebaritems() {
  let component
  switch (window.location.pathname) {
    case './':
      break;
    case '/tdashboard':
      component =<Tdashboard/>      
      break;
    case '/allcourse':
      component =<Allcourses/>      
      break;
    case '/allnotes':
      component =<Allnotes/>      
      break;
    case '/history':
      component =<History/>      
      break;
    case '/setting':
      component =<Setting/>      
      break;
    case '/logout':
      component =<Logout/>      
      break;
  
   
  }
  return (
    <>
  
    <nav className='nav'>
      <ul className='list'>
        <div className='toplist'>
        <li><a href='/tdashboard'>tdashboard</a></li>
        <li><a href='/allcouses'>Allcourses</a></li>
        <li><a href='/allnotes'>Allnotes</a></li>
        <li><a href='/history'>History</a></li>
        </div>
        <div className='downlist'>
        <li><a href='/setting'>Setting</a></li>
        <li><a href='/logout'>Logout</a></li>
        </div>
      </ul>
    </nav>
    <div className='container'>{component}</div>
    </>
    )
}

   