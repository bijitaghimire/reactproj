import{React, useState}  from 'react'
// import {Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import Registration from './Registration';





export default function Login(props) {
    // const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const[pass, setPass] = useState('');
    // const[authenticated, setAuthenticated]=useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    // const user=[{username:"", pass:""}]
    
    const haldleSubmit =(e)=>{
        e.preventDefault();
        console.log(email);    
      
        // navigate("/sdashboard'")
        // if(email && pass ===  true){ //after connecting database.
        //     localStorage.setItem("authenticated", true);
        //     navigate("/sdashboard")
        // }
       
   
    // const navToReg =()=>{
    //     Navigate('/registration')
    //     alert('button clicked')
    }
  return (
    <section className ='login'>
        <div className ='smalldivision-login'>
            <div className ='col-1-login'>
                <div className ='log-into-acc'>
                   <h1 className='signin' > Sign In</h1>
                   <br/><br/>
                   <form className ='form-login' onSubmit={haldleSubmit}>
         
                    <input type='email' placeholder='valid email' value={email} required onChange={(e) => setEmail(e.target.value)}></input><br/><br/>
                    <input type='password' placeholder='password' required value={pass} onChange={(e) => setPass(e.target.value)}></input><br/><br/>
                    <label for='faculty' required>Choose Your Faculty:</label><br/>
                    <select value='faculty' className='Faculty'>
                        <option value='BSc.CSIT' required selected>BSc.CSIT</option>
                        <option value='BIT' required>BIT</option>
                    </select>
                    <br/><br/>
                    <label for='role'required>Choose Your Role:</label><br/>
                    <select value='role' className='Role'>
                        <option value='teacher' >Teacher</option>
                        <option value='student' selected>Student</option>
                        <option value='admin'>Admin</option>
                    </select>
                    <br/><br/>
                    <button  className="btn-1-login">Submit</button>
                    </form>
                </div>
            </div>
            <div className='col-2-login'>
                <div className='wel-login'>
                    <h1>Welcome Back!</h1>
                    <span>Please <em> Sign In</em> to stay connected with us and our services.</span>
                </div> 
                <div className='no-acc'>
                <span>Don't have an account? &nbsp;</span> 
                <button className='btn-2-login' onClick={() =>props.onFormSwitch ('registration')}> Register here</button>
                {/* onclick={navToReg()} */}
                </div>
            </div>
        </div>
    </section>
  )
}
