import React from "react";
import {useHistory,useParams,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import {toast} from "react-toastify"
import axios from "axios";
import { useEffect, useState } from "react";
const Home=()=>{
    const [data,setData]=useState([]);
    const loadData=async()=>{
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data);
    };

    useEffect(()=>{
        loadData();
    },[]);

    const deleteContact =(id)=>{
       if(window.confirm("Are You sure you want to delete contact ?")){
          axios.delete(`http://localhost:5000/api/remove/${id}`);
          toast.success("Contact Deleted Successfully");
          setTimeout(()=>loadData(),500);
       }
    }
    return(
        
        <div>
            
      <div id="right-panel" className="right-panel">
         
         <div className="content pb-0">
            <div className="orders">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="card">
                        <div className="card-body">
                           <h4 className="box-title">Contacts </h4>
                        </div>
                        <div className="card-body--">
                           <div className="table-stats order-table ov-h">
                              
                              <table className="table ">
                                 <thead>
                                    <tr>
                                    <th style={{textAlign:"center"}}>No</th>
                                    <th style={{textAlign:"center"}}>Name</th>
                                    <th style={{textAlign:"center"}}>Email</th>
                                    <th style={{textAlign:"center"}}>Contact</th>
                                    <th style={{textAlign:"center"}}>Actions</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                 {data.map((item,index)=>{
                    return(
                        <tr key={item.id}>
                            <th scope="row">{index+1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>
                            <Link to={`/update/${item.id}`}>
                                <button className="btn btn-primary" style={{padding:"2px 6px"}}>Edit</button>
                            </Link>&nbsp;
                            <button className="btn btn-danger" style={{padding:"2px 6px"}} onClick={() => deleteContact(item.id)}>Delete</button>&nbsp;
                            <Link to={`/view/${item.id}`}>
                              <button className="btn btn-dark"style={{padding:"2px 6px"}}>Views</button>
                            </Link>
                            

                        </td>



                        </tr>
                    )

                })}
                                   
                                    
                                   
                                 </tbody>
                              </table>
                              
                           </div>
                           
                        </div>
                        
                     </div>
                     <Link to="/addContact">
                                 <button className="btn btn-success">Add Contact</button>
                              </Link>
                  </div>
               </div>
            </div>
		  </div>
         
         
      </div>
        </div>
    );
};
export default Home