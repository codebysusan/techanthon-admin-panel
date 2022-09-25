import {BrowserRouter, Routes, Route,useRoutes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import Dashboard from "./pages/Dashboard";
import Header from './components/layouts/header'; 
import Footer from './components/layouts/footer'; 
import React, { Component } from 'react';

class AdminSide extends Component {
    render()

    {
        return(  
    
            <div>
            <Header></Header>
               <Routes>              
                   <Route exact path="/" element={<Dashboard/>}/>
                               
                 </Routes>
            </div>
              
              
              
              
              
            
            
           
        
            );
    }
    
}
  
  export default AdminSide 