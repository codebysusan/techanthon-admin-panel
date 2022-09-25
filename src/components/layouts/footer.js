import React from 'react';

class Footer extends React.Component
{
    render(){
    return(
      <div>
         <div className="clearfix"></div>
         <footer className="site-footer">
            <div className="footer-inner bg-white">
               <div className="row">
                  
                  <div className="col-sm-6 text-right">
                     Designed by <a href="https://colorlib.com/">Colorlib</a>
                  </div>
               </div>
            </div>
         </footer>
         <script src="assets/js/vendor/jquery-2.1.4.min.js" type="text/javascript"></script>
      <script src="assets/js/popper.min.js" type="text/javascript"></script>
      <script src="assets/js/plugins.js" type="text/javascript"></script>
      <script src="assets/js/main.js" type="text/javascript"></script>
      </div>
    )
}
}
export default Footer;