import {BrowserRouter, Routes, Route,Router} from "react-router-dom";
import './App.css';
import AdminLogin from "./pages/Login";
import AdminSide from './admin_side';
import React, { Component } from 'react';
import useToken from './useToken';
import Header from './components/layouts/header'; 
import Footer from './components/layouts/footer'; 
import Dashboard from "./pages/Dashboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const {token, setToken} = useToken();

  if(!token) {
    return <AdminLogin setToken={setToken} />
  }
  
  return (    
      
    
    
    
    <div className="App">
      
      <ToastContainer position="top-center" autoClose={1500}/>
      <BrowserRouter>
      <Header></Header>
      <Routes>      
      <Route exact path="/" element={<Dashboard/>}/>
      <Route path="/login" element={<AdminLogin/>}/>      
    </Routes>
    <Footer></Footer>
      
    </BrowserRouter>
      
      
        
      
      
      
    </div>
    
   

  
     
     
    
  );
}

export default App;
