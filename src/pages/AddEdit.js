import React from 'react';
import {Link,useNavigate ,useParams} from "react-router-dom";
import {toast} from "react-toastify"
import axios from "axios";
import { useEffect, useState } from "react";


const initialState={
    name:"",
    email:"",
    contact:"",
};

const AddEdit=()=>{
    const [state,setState]=useState(initialState);
    const {name,email,contact}=state;
    const his=useNavigate();

    const {id}= useParams();
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/get/${id}`).then((resp)=>setState({...resp.data[0]}));
    },[id]);

    const handleSubmit=(e) =>{
        e.preventDefault();
        ;
            if(!id)
            {

                axios.post("http://localhost:5000/api/post",{
                name,
                email,
                contact,
            })
                .then(()=>{
                 setState({name:"",email:"",contact:""});
                })
                .catch((err)=>toast.error(err.response.data));
                toast.success("Contact Added Successfully");
            }
            else{
                axios.put(`http://localhost:5000/api/update/${id}`,{
                name,
                email,
                contact,
            })
                .then(()=>{
                 setState({name:"",email:"",contact:""});
                })
                .catch((err)=>toast.error(err.response.data));
                toast.success("Contact Updated Successfully");

            }
            setTimeout(( )=>his("/"),500);
        
    };
    const handleInputChange = (e) =>{
        const {name,value}=e.target;
        setState({...state,[name]:value});
    };
    return(
        <div>
           
      <div id="right-panel" className="right-panel">
         
         <div className="content pb-0">
            <div className="animated fadeIn">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="card">
                        <div className="card-header"><strong>Contact Form</strong></div>
                        <form onSubmit={handleSubmit}>
                        <div className="card-body card-block">
                           <div className="form-group"><label htmlFor="name" className=" form-control-label">Name</label><input type="text"  name="name" placeholder="Enter name" className="form-control" defaultValue={name || ""} onChange={handleInputChange} required/></div>
                           <div className="form-group"><label htmlFor="email" className=" form-control-label">Email</label><input type="text" name="email"  placeholder="Enter your email" className="form-control" defaultValue={email || ""} onChange={handleInputChange} required/></div>
                           <div className="form-group"><label htmlFor="contact" className=" form-control-label">Contact No</label><input type="text" name="contact" placeholder="Enter your contact no" className="form-control" defaultValue={contact || ""} onChange={handleInputChange} required/></div>
                            <input type="submit" className="btn btn-dark " value={id ? "Update": "Save"}></input>
                                
                           
                           
                           &nbsp;
                           <Link to="/">
                           <button id="payment-button"  className="btn btn-success " value="Go Back">
                                
                                <span id="payment-button-amount">View</span>
                            </button>
                            </Link>
                        </div>
                        </form>
                       
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
      </div>
        </div>
    )
}
export default AddEdit;