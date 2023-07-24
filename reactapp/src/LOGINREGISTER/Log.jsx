import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import './log.css';


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the form from automatically submitting
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }
    const login = { "email": email, "password": password };
    const result = await axios.post("http://localhost:8080/auth/login", login);
    console.log(result);

    if (result.data === "Login Successful !") {

      toast.success('Login Successful !', {
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

        navigate('/');
      }, 1500);

    } else if (result.data === "Invalid Password") {
      toast.error('Invalid password!', {
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
      toast.error('Invalid Email ID !', {
        position:"top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }


  return (
  <div>
        <div className="containerpotta">
          <form onSubmit={handleSubmit} style={{ padding: "1cm" }}>
            <div style={{ padding: "0.5cm" }}>
              <p style={{ fontSize: "25px" }}>LOGIN</p>
              <label>Email Id:</label>
              <br></br>
              <input type="text" placeholder="Email" required onChange={(e) => { setEmail(e.target.value) }} />
              <span className="border"></span>
            </div>
            <div style={{ padding: "0.5cm" }}>
              <label>Password:</label>
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
            <div style={{ padding: "0.5cm" }}>
              <input type="submit" value="LOGIN" className="private-inp" />
              <p>
                Don't have an account?
                <a HREF='register'>Sign Up</a>
              </p>
            </div>
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
              theme="dark" />
          </form>
        </div>
      </div>


  );
};

export default Login;