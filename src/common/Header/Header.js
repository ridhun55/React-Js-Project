import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
   return (
         <header id="header">
            <nav className="navbar navbar-main navbar-expand-lg navstyle">
               <div className="container position-relative">
                  <Link className="btn btn-primary Brand-btn py-2 px-3 mr-lg-5" to="/">
                  <span className="Brand textShadow_0">Website name</span>
                  </Link>  
                  <div className="d-flex align-items-center">
                     <button className="navbar-toggler py-2 px-3 btn btn-primary Brand-btn" 
                        type="button" data-toggle="collapse" data-target="#navbarNavDropdown" 
                        aria-controls="navbarNavDropdown" aria-expanded="false" 
                        aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                     </button>
                  </div>
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                     <button className="navbar-close  btn btn-primary Brand-btn" 
                        type="button" data-toggle="collapse" data-target="#navbarNavDropdown" 
                        aria-controls="navbarNavDropdown" aria-expanded="false" 
                        aria-label="Toggle navigation">
                     <span className="fa fa-arrow-right "></span>
                     </button>
                     <ul className="navbar-nav navbar-nav-hover align-items-lg-center ">
                        <li className="nav-item dropdown">
                           <Link to="/" className="nav-link nav-btn ">
                           <span className="nav-link-inner-text textShadow_0">Home</span>
                           </Link>
                        </li>
                        
                        <li className="nav-item dropdown ">
                           <a href="/blogs" className="nav-link nav-btn" data-toggle="dropdown">
                           <span className="nav-link-inner-text textShadow_0">PSC Blogs</span> 
                           </a>
                           <ul className="dropdown-menu ">
                              <li>
                                 <Link className="dropdown-item" to="/kerala_blog">
                                 Kerala</Link>
                              </li>
                              <li>
                                 <Link className="dropdown-item" to="#">
                                 India</Link>
                              </li>
                              <li>
                                 <Link className="dropdown-item" to="#">
                                 World</Link>
                              </li>
                              <li>
                                 <Link className="dropdown-item" to="#">
                                 Science</Link>
                              </li>
                              <li>
                                 <Link className="dropdown-item" to="#">
                                 IT</Link>
                              </li>
                              <li>
                                 <Link className="dropdown-item" to="#">
                                 സ്വാതന്ത്ര്യ സമരം</Link>
                              </li>
                           </ul>
                        </li>
                        <li className="nav-item dropdown">
                           <a href="#" className="nav-link nav-btn" data-toggle="dropdown">
                           <span className="nav-link-inner-text textShadow_0">PSC Objective</span> 
                           </a>
                           <ul className="dropdown-menu ">
                              <li>
                                 <Link className="dropdown-item" to="/blogs">
                                 Kerala</Link>
                              </li>
                              <li>
                                 <Link className="dropdown-item" to="#">
                                 India</Link>
                              </li>
                              <li>
                                 <Link className="dropdown-item" to="#">
                                 World</Link>
                              </li>
                              <li>
                                 <Link className="dropdown-item" to="#">
                                 Science</Link>
                              </li>
                              <li>
                                 <Link className="dropdown-item" to="#">
                                 IT</Link>
                              </li>
                              <li>
                                 <Link className="dropdown-item" to="#">
                                 സ്വാതന്ത്ര്യ സമരം</Link>
                              </li>                              
                           </ul>
                        </li>
                        <li className="nav-item dropdown">
                           <a href="#" className="nav-link nav-btn" data-toggle="dropdown">
                           <span className="nav-link-inner-text textShadow_0">PSC Others</span> 
                           </a>
                           <ul className="dropdown-menu ">
                              <li><a className="dropdown-item" href="#">Maths Tricks</a></li>
                              <li><a className="dropdown-item" href="#">Language : Malayalam</a></li>
                              <li><a className="dropdown-item" href="#">Language : English</a></li>
                              <li><a className="dropdown-item" href="#">Language : Hindi</a></li>
                           </ul>
                        </li>
                        <li className="nav-item dropdown">
                           <a href="#" className="nav-link nav-btn" data-toggle="dropdown">
                           <span className="nav-link-inner-text textShadow_0">Notifications</span> 
                           </a>
                           <ul className="dropdown-menu ">
                              <li><a className="dropdown-item" href="#">7th level</a></li>
                              <li><a className="dropdown-item" href="#">SSLC level</a></li>
                              <li><a className="dropdown-item" href="#">Degree level</a></li>
                              <li><a className="dropdown-item" href="#">PG level</a></li>
                           </ul>
                        </li>
                        <li className="nav-item dropdown">
                           <a href="#" className="nav-link nav-btn" data-toggle="dropdown">
                           <span className="nav-link-inner-text textShadow_0">Syllabus</span> 
                           </a>
                           <ul className="dropdown-menu ">
                              <li><a className="dropdown-item" href="#">7th level</a></li>
                              <li><a className="dropdown-item" href="#">SSLC level</a></li>
                              <li><a className="dropdown-item" href="#">Degree level</a></li>
                              <li><a className="dropdown-item" href="#">PG level</a></li>
                           </ul>
                        </li>
                        <li className="nav-item dropdown">
                           <a href="#" className="nav-link nav-btn" data-toggle="dropdown">
                           <span className="nav-link-inner-text textShadow_0">About</span> 
                           </a>
                           <ul className="dropdown-menu ">
                              <li><a className="dropdown-item" href="#">About Us</a></li>
                              <li><a className="dropdown-item" href="#">Contact Us</a></li>
                              <li><a className="dropdown-item" href="#">Feedbacks</a></li>
                              <li><a className="dropdown-item" href="#">Others</a></li>
                           </ul>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         </header>


   )
}

export default Header
