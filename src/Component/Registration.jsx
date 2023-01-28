
import{React, useState}  from 'react'

// import { useNavigate} from 'react-router-dom';
// import Button from '@material-ui/core/Button';
// import Reading from 'C:/Users/Acer/Desktop/7th sem/project/hamro-notes/src/assets/Reading.jpg'
// import Reading from '../assets/Reading.jpg'
// import Texaslogo from '../assets/Texaslogo.jpg'




 
export default function Registration(props) {
  const [email, setEmail] = useState('');
  const[pass, setPass] = useState('');
  const [name, setName] = useState('');
  const[cpass, setConPass] = useState('');
  const haldleSubmit =(e)=>{
      e.preventDefault();
      var email = document.form.email.value;
        var pass = document.form.pass.value;
        var conpass = document.form.cpass.value;
        console.log(email);
        var atposition=email.indexOf("@");  
        var dotposition=email.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
            alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
            return false;  
            }else if(pass.length<6){  
                alert("Password must be at least 6 characters long.");  
                return false;  
        }  
        if(pass===conpass){  
          return true;  
          }  
          else{  
          alert("password must be same!");  
          return false;  
          }  


      // const validateForm=()=>{
      //   var email = document.form.email.value;
      //   var pass = document.form.pass.value;
      //   var atposition=email.indexOf("@");  
      //   var dotposition=email.lastIndexOf(".");  
      //   if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
      //       alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
      //       return false;  
      //       }else if(pass.length<6){  
      //           alert("Password must be at least 6 characters long.");  
      //           return false;  
      //   }  
      //       } 
  }
  return (
   <>
    <section className='register'>
   
      <div className="row">
        <div className='smalldivision'>
          <div className='col-1'>
            {/* <img src={Texaslogo} alt='logo'/> */}
            <div className='wel'>
            <h1><h1>Welcome guys!</h1></h1>
            <br/>
          <p>Enter your personal details and start journey with us.</p>
            </div>
            <div className='acc-exist'>
              <p>Already have an account?&nbsp;<button className='btn-2'onClick={()=>props.onFormSwitch('login')} ><em>Sign In</em></button></p>
                     
            </div>
          </div>
          <div className='col-2'>
         <div className='create'>
         <h1 >Create Account </h1>
        <span >Register here.</span><br/><br/>
         </div>
        <form className='Form' onSubmit={haldleSubmit}>
        <input type='text' placeholder='username' className='Username' value={name} onChange={(e) => setName(e.target.value)}></input><br/><br/>
        <input type='email' placeholder='useremail' className='Useremail' value={email} onChange={(e) => setEmail(e.target.value)}></input><br/><br/>
          <input type='password' placeholder='user password' className='Password' value={pass} onChange={(e) => setPass(e.target.value)}></input>
          <br/><br/>
          <input type='password' placeholder='confirm-password' className='Confirm-password' value={cpass} onChange={(e) => setConPass(e.target.value)}></input>
          <br/><br/>
          <input type='number' placeholder='Phone number' className='Phone'></input>
          <br/><br/>
          <input type='number' placeholder='batch' className='Batch'></input><br/><br/>
          <label for='faculty'>Choose Your Faculty:</label><br/>
          <select value='faculty' className='Faculty'>
            <option value='BSc.CSIT' selected>BSc.CSIT</option>
            <option value='BIT'>BIT</option>
          </select>
          <br/><br/>
          <label for='role'>Choose Your Role:</label><br/>
          <select value='role' className='Role'>
            <option value='teacher' >Teacher</option>
            <option value='student' selected>Student</option>
            <option value='admin'>Admin</option>
          </select>
        <br/><br/>
        <button  className="btn-1">Submit</button>
        </form>
          </div>
        </div>
      </div>
   </section>
   </>
  )
}
