import React from 'react'
import {Link} from 'react-router-dom'

const Breadcrumbs = () => {
   return (
      <div className="ldea px-md-6 mb-5 boxShadowOut_0" >
         <nav aria-label="breadcrumb border border-light" >
            <ol className="breadcrumb">
               <li className="breadcrumb-item textShadow_0"><Link className="link" to="/">Home</Link></li>
               <li className="breadcrumb-item textShadow_0"><Link className="link active" to="#">PSC Blogs</Link></li>
            </ol>
         </nav>
      </div>
   )
}

export default Breadcrumbs
