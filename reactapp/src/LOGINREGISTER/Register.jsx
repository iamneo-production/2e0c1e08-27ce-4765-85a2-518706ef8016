
import React, { useState } from 'react';
import './register.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Register   = () => {
  const navigate = useNavigate();

  const [fname, setfname] = useState("")
  const [lname, setlname] = useState("");
  const [address, setaddress] = useState('');
  const [mobile, setmobile] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handlePasswordChange = (event) => {
    setpassword(event.target.value);
  };
  const handleSubmit = async(e) => {
    e.preventDefault(); 

    const reg={fname:fname, lname:lname,address:address,mobile:mobile,"email":email, "password": password};
    console.log(reg);
    const result=await axios.post("http://localhost:8080/add",reg);
    console.log(result.data);

      
      if (result.data === "Signup Successful !") {
        toast.success('Signup Successful !', {
          position:"top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          navigate('/Log');
        }, 1500);
          
        
      } else if (result.data === "Email ID Already Exists") {
        toast.error('Email ID Already Exists', {
          position:"top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      
      
    } else {
      console.log(result.data);

      }
         };
  return (
    <section id='rohith'>
      <div className="login-container">
        <div className="register">
          <h3>SIGN UP</h3>
          <form onSubmit={handleSubmit}>
            <div>
            <label>Firstname :</label>
            <br></br>
            
            <input type='fname' onChange={(e)=>{setfname(e.target.value)}} placeholder="Enter Firstname"/>
            <br></br>
           
            <label>Lastname :</label>
            <br></br>
            
            <input type='lname' onChange={(e)=>{setlname(e.target.value)}} placeholder="Enter Lastname"/>
           
            <br></br>
            <label>Mobile:</label>
            <br></br>
            <input type='mobile' onChange={(e)=>{setmobile(e.target.value)}} placeholder="Enter MobileNumber" />
            <br></br>
          
            <label>Address :</label>
            <br></br>
           
            <input type='address' onChange={(e)=>{setaddress(e.target.value)}} placeholder="Enter Address"/>
            <br></br>
           
            <label>Email id:</label>
            <br></br>
           
            <input type='email' onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter Email"/>
            <br></br>
           
            <label>Password :</label>
            <br></br>
            
            <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                      />
              <span className="border"></span>
            </div>
            <input type="submit" value="Register" className="private-inp" />
            <p>
              Already Have an Account?
              <a href="/Log">Login Here</a>
            </p>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='red'
/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;