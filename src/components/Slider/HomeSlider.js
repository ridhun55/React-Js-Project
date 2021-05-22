import React from 'react'

function HomeSlider() {
   return (
      <div>
         <section id="MainPage" className="section  section bg-primary pb-2 overflow-hidden z-2">
					<div className="container boxShadowIn_0">
						<div className="container z-2">
							<div className="row justify-content-center text-center pt-6 pb-4 ">
								<div className="col-lg-8 col-xl-8">
									<div id="SlideID" className="carousel slide" data-interval="4000" data-ride="carousel">
										<div className="carousel-inner">
											<div className="carousel-item active">
												<h1 className="display-1 mb-3 textShadow_0 textHover_0">Website Name.com</h1>
												<p className="lead px-md-6 mb-5 textShadow_0" >Learn <strong>Science subjects</strong> with affordable price at anywhere in the world. we provide all notes and online classes </p>
											</div>
											<div className="carousel-item ">
												<h1 className="display-1 mb-3 textShadow_0 textHover_0">Maths Tricks</h1>
												<p className="lead px-md-6 mb-5 textShadow_0" >Learn <strong>Electronics</strong> with affordable price at anywhere in the world. we provide all notes and online classes </p>
											</div>
											<div className="carousel-item ">
												<h1 className="display-1 mb-3 textShadow_0 textHover_0">Knowledge Blogs</h1>
												<p className="lead px-md-6 mb-5 textShadow_0" >Learn <strong>Computer Science</strong> with affordable price at anywhere in the world. we provide all notes and online classes </p>
											</div>
											<div className="carousel-item ">
												<h1 className="display-1 mb-3 textShadow_0 textHover_0">Objective Study</h1>
												<p className="lead px-md-6 mb-5 textShadow_0" >Learn <strong>Zoology</strong> with affordable price at anywhere in the world. we provide all notes and online classes </p>
											</div>
											<div className="carousel-item ">
												<h1 className="display-1 mb-3 textShadow_0 textHover_0">Current Affairs</h1>
												<p className="lead px-md-6 mb-5 textShadow_0" >Learn <strong>Botany</strong> with affordable price at anywhere in the world. we provide all notes and online classes </p>
											</div>
											<div className="carousel-item ">
												<h1 className="display-1 mb-3 textShadow_0 textHover_0">General Science </h1>
												<p className="lead px-md-6 mb-5 textShadow_0" >Learn <strong>Physics</strong> with affordable price at anywhere in the world. we provide all notes and online classes </p>
											</div>
											<div className="carousel-item ">
												<h1 className="display-1 mb-3 textShadow_0 textHover_0">IT & Cyber Law</h1>
												<p className="lead px-md-6 mb-5 textShadow_0" >Learn <strong>Chemistry</strong> with affordable price at anywhere in the world. we provide all notes and online classes </p>
											</div>
                                 <div className="carousel-item ">
												<h1 className="display-1 mb-3 textShadow_0 textHover_0">New Notifications</h1>
												<p className="lead px-md-6 mb-5 textShadow_0" >Learn <strong>Chemistry</strong> with affordable price at anywhere in the world. we provide all notes and online classes </p>
											</div>
											
										</div>
										<a href="#Category" className=" justify-content-center">
										<button className="mb-5 btn btn-primary" type="button"><span className="textShadow_0">Getting Start</span></button>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
      </div>
   )
}

export default HomeSlider
