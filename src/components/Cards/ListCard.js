import React from 'react'
import {Link} from 'react-router-dom'

const ListCard = (props) => {
   return (
      <>
         <div className="card mt-4 ">
            <div className="row no-gutters boxShadowIn_0">
               <div className="col-sm-5 ">
                  <img src={props.img} className="card-img-top" alt={props.title} />
               </div>
               <div className="col-sm-7">
                     <div className="card-body text-left">
                        <h1 className="h3 card-title mt-3 "><span className="textShadow_0">{props.title}</span></h1>
                        <p className="text-justify textShadow_0">{props.disc} etc..</p>
                        <Link to={props.url} className="btn btn-sm btn-primary stretched-link"><span className="textShadow_0">Read More</span> <i className="fa fa-chevron-right textShadow_0" aria-hidden="true"></i></Link>
                       </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default ListCard
