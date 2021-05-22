import React from 'react'
import Breadcrumbs from '../Pages/Breadcrumbs'

const BlogSlider = () => {
   return (
      <section className="section  section bg-primary pb-2 overflow-hidden z-2">
         <div className="container boxShadowIn_0">
            <div className="container z-2">
               <div className="row justify-content-center text-center pt-6 pb-4 ">
                  <div className="col-lg-8 col-xl-8">
                     <div className="carousel slide" data-interval="4000" data-ride="carousel">
                        <div className="carousel-inner">
                           <div className="row carousel-item active">
                              <h1 className="display-2 mb-3 textShadow_0 textHover_0">Website Name.COM</h1>                            
                           </div>
                           <div className="carousel-item ">
                              <h1 className="display-2 mb-3 textShadow_0 textHover_0">Maths Tricks</h1>
                           </div>
                           <div className="carousel-item ">
                              <h1 className="display-2 mb-3 textShadow_0 textHover_0">Knowledge Blogs</h1>
                           </div>
                           <div className="carousel-item ">
                              <h1 className="display-2 mb-3 textShadow_0 textHover_0">Objective Study</h1>
                           </div>
                           <div className="carousel-item ">
                              <h1 className="display-2 mb-3 textShadow_0 textHover_0">Current Affairs</h1>
                           </div>
                           <div className="carousel-item ">
                              <h1 className="display-2 mb-3 textShadow_0 textHover_0">General Science </h1>
                           </div>
                           <div className="carousel-item ">
                              <h1 className="display-2 mb-3 textShadow_0 textHover_0">IT & Cyber Law</h1>
                           </div>
                           <div className="carousel-item ">
                              <h1 className="display-2 mb-3 textShadow_0 textHover_0">New Notifications</h1>
                           </div>
                        </div>
                     </div>

                     <Breadcrumbs />

                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default BlogSlider
