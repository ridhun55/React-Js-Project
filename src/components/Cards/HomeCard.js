import React from 'react'
import {Link} from 'react-router-dom'

const HomeCard = (props) => {
   return (
      <div className="col-12 col-md-4 mb-4 ">
         <div className="card-body boxShadowOut_0 rounded border border-light padding_y-5">
            <img key={props.id} src={props.img} alt={props.title} />
            <h1 className="h4 card-title mt-3 mb-2"><span className="textShadow_0">{props.title}</span></h1>
            <p className="card-text text-left mb-0 textShadow_0">{props.disc}</p>
            <Link to={props.url} className=" float-right btn btn-primary btn-sm"><span className="textShadow_0">Read More</span> <i className="fa fa-chevron-right textShadow_0" aria-hidden="true"></i></Link>
         </div>
      </div>
   )
}

export default HomeCard
