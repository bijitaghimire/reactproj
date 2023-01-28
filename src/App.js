
import{React, useState}  from 'react'

import Login from "./Component/Login";
import './app-login.css'


import './app-reg.css';
import Registration from "./Component/Registration";

// import Sidebaritems from "./Pages/Sidebaritems";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  const[currentForm, setCurrentForm]= useState("login")
  const toggleForm =(formName)=>{
    setCurrentForm(formName);
  }
 
  return (
    <>
    <div className="App">
      {currentForm === "login"? <Login onFormSwitch ={toggleForm} /> : <Registration onFormSwitch ={toggleForm} />}
  
    </div>
   
   
    
    
  
 
{/* <Registration/> */}
 {/* < Sidebaritems/> */}
 </>
  );
}

export default App;
