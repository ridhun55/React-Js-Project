import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
   return (
      <>

      <footer className="footer container mt-6 ">
         <div className="row">
            
            <div className="col-md-4 mx-auto mt-3">
               <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
               <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               <div>
                  <h1 className="h6 font-weight-bold">Contact Us</h1>
                  <p >
                     Pranavam <br/>
                     Kunnathara, Koyilandy, Kozhikode
                  </p>
               </div>
            </div>

            <div className="col-md-8 mx-auto">
               <div className="row">
                  
               <div className="col-md-6 mx-auto mt-3 ">
                     <h6 className=" font-weight-bold">Category Name</h6>
                     <p>
                        <Link to="#">Here you can use rows and columns to</Link><br/>
                        <Link to="#">Here you can use rows and columns to</Link><br/>
                        <Link to="#">Here you can use rows and columns to</Link><br/>
                     </p>
                  </div>
                  <div className="col-md-6 mx-auto mt-3">
                     <h6 className=" font-weight-bold">Category Name</h6>
                     <p>
                        <Link>Here you can use rows and columns to</Link><br/>
                        <Link>Here you can use rows and columns to</Link><br/>
                        <Link>Here you can use rows and columns to</Link><br/>
                     </p>
                  </div>
                  <div className="col-md-6 mx-auto mt-3">
                     <h6 className=" font-weight-bold">Category Name</h6>
                     <p>
                        <Link>Here you can use rows and columns to</Link><br/>
                        <Link>Here you can use rows and columns to</Link><br/>
                        <Link>Here you can use rows and columns to</Link><br/>
                     </p>
                  </div>
                  <div className="col-md-6 mx-auto mt-3">
                     <h6 className=" font-weight-bold">Category Name</h6>
                     <p>
                        <Link>Here you can use rows and columns to</Link><br/>
                        <Link>Here you can use rows and columns to</Link><br/>
                        <Link>Here you can use rows and columns to</Link><br/>
                     </p>
                  </div>

               </div>
            </div>
         </div>
         <div className="col-12 py-4  boxShadowOut_0 mt-4 mb-4">
            <div class="text-center font-weight-bold textShadow_0">© 2020 Copyright:
               <a className="font-weight-bold textShadow_0" href="#"> MDBootstrap.com</a>
            </div>
         </div>
      </footer>
      </>
   )
}

export default Footer
