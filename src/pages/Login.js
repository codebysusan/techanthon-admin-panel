import React, { useEffect, useState } from "react";
import axios from "axios";
import {Modal, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLogin = ({setToken}) => {
 

    const [email, setUserName] = useState();
    const [password, setPassword] = useState();
    const [error,setError]=useState('')
   
  
       const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        //setLoading(true)
       
        await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/adminlogin`, {
          email: email,
          password: password
        }).then(response => {
        
         
        
            if(response.data.message==='success'){
                setToken(response.data)
                toast.success('Login Successfull') 
               

            }else{     
                      
                setError(response.data.message)                
                console.log('dd',error)  
            }
            
         
              
         
        }).catch(error => {
          console.log(error)        
        
        })
    
      }

  return (
    <>
      <div className="sufee-login d-flex align-content-center flex-wrap">
        <div className="container"  style={{marginTop:"150px"}}>
          <div className="login-content">
         
            <div className="login-form ">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder="Email" name="email"  onChange={e => setUserName(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Password" name="password"  onChange={e => setPassword(e.target.value)}/>
                </div>
             

                <button type="submit" className="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                <center>
                <span style={{color:'red',alignContent:'center',alignItems:'center',fontWeight:'bold'}}>{error}</span>
                </center>
                <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" style={{ border: 'none' , cursor:"pointer"}} >Forgot your password?</a>
              </form>
            </div>
          </div>
        </div>
      </div>

      
    </>
  )
}

export default AdminLogin

AdminLogin.propTypes = {
    setToken: PropTypes.func.isRequired
  }