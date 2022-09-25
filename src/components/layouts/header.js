import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
const Header=()=>
{

   const his=useNavigate()
   const logout=()=>{

      localStorage.clear()
      window.location.reload()
   }
  

    
    
    return(
       
      <div>
                  <aside id="left-panel" className="left-panel">
         <nav className="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" className="main-menu collapse navbar-collapse">
               <ul className="nav navbar-nav">
                  <li className="menu-title">Menu</li>
               
				  <li className="menu-item-has-children dropdown" >
              <NavLink to='/dashboard/viewShop'>Shop Management</NavLink>
                  </li>
               </ul>
            </div>
         </nav>
      </aside>
      
      <div id="right-panel" className="right-panel">
         <header id="header" className="header">
            <div className="top-left"> 
               <div className="navbar-header" >
                  <a className="navbar-brand" href="#">Admin Section</a>
                  <a className="navbar-brand hidden" href="#"></a>
                  <a id="menuToggle" className="menutoggle"><i className="fa fa-bars"></i></a>
               </div>
            </div>
            <div className="top-right">
               <div className="header-menu">
               <div className="user-area dropdown float-right">
                <a href="#" className="dropdown-toggle active"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{textDecoration:'none'}} onClick={logout}>Logout</a>
              
                <div className="user-menu dropdown-menu text-center ">
                  <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" style={{ border: 'none', cursor:"pointer"}} >Profile</a>
                  <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" style={{ border: 'none', cursor:"pointer" }} >ChangePassword</a>
                  <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" style={{ border: 'none', cursor:"pointer" }} >Logout</a>
                </div>
              </div>
               </div>
            </div>
         </header>
        
          
         
      </div>
      <script src="admin_theme/assets/js/vendor/jquery-2.1.4.min.js" type="text/javascript"></script>
      <script src="admin_theme/assets/js/popper.min.js" type="text/javascript"></script>
      <script src="admin_theme/assets/js/plugins.js" type="text/javascript"></script>
      <script src="admin_theme/assets/js/main.js" type="text/javascript"></script>
      </div>
    )
}

export default Header;