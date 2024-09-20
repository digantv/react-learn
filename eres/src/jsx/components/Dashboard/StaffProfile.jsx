import React from 'react';
import {Link} from 'react-router-dom';

import nurse from './../../../assets/images/nurse.jpg';

const StaffProfile = () => {
    return (
        <>
            <div className="d-md-flex align-items-center">
                <div className="page-titles mb-2">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={"#"}>Staff</Link></li>
                        <li className="breadcrumb-item active"><Link to={"#"}>Staff Profile</Link></li>
                    </ol>
                </div>
                <div className="ms-auto mb-3">
                    <Link to={"#"} className="btn btn-primary btn-rounded add-staff">+ Add Staff</Link>
                </div>
            </div>             
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xl-8">
                                    <div className="profile">
                                        <div className="staff">
                                            <img src={nurse} alt="" />
                                        </div>
                                        <div className="staf-info">
                                            <div>
                                                <div className="d-flex align-items-center mb-2">
                                                    <h4 className="mb-0">Name :</h4><p className="ms-2 mb-0">Kate Velasquez</p>
                                                </div>
                                                <div className="d-flex align-items-center mb-2">
                                                    <h4 className="mb-0">Gender :</h4><p className="ms-2 mb-0">Female</p>
                                                </div>
                                                <div className="d-flex align-items-center mb-2">
                                                    <h4 className="mb-0">Degrer :</h4><p className="ms-2 mb-0">BSN</p>
                                                </div>  
                                                <div className="d-flex align-items-center mb-2">
                                                    <h4 className="mb-0">Designation :</h4><p className="ms-2 mb-0">Nurse</p>
                                                </div>                                                
                                            </div>
                                            <div className="location mt-4">
                                                <div className="mb-3">
                                                    <span><i className="fa-solid fa-location-dot me-2 text-primary"/> San Francisco, USA</span>
                                                    <span><i className="fa fa-building text-secondary me-2"/> ICU Department</span>
                                                </div>
                                                <div>
                                                    <span><i className="fa fa-phone me-2 text-primary"/> +1 1234598767</span>
                                                    <span><i className="fa fa-envelope me-2 text-secondary"/>hello@gmail.com</span>
                                                </div>	
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="d-flex justify-content-between border-bottom mb-3 pb-2 mt-xl-0 mt-3">
                                        <span className="font-w600 text-black">Followers</span>
                                        <span>500</span>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom mb-3 pb-2">
                                        <span className="font-w600 text-black">Following</span>
                                        <span>300</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span className="font-w600 text-black">Friends</span>
                                        <span>300</span>
                                    </div>
                                    <div className="mt-4">
                                        <button to={"#"} className="btn btn-primary me-3">Follow</button>
                                        <button to={"#"} className="btn btn-secondary">Message</button>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="mt-5">
                                        <h4 className="fs-20 font-w600">About Me</h4>
                                        <div className="staff-info">
											<p><i className="fas fa-dot-circle me-2 text-primary"/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
											</p>
											<p><i className="fas fa-dot-circle me-2 text-primary"/>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
											</p>
										</div>
                                    </div>
                                    <hr/>                                    
									<h4 className="fs-20 font-w600">Appointment Schdule</h4>
									<div className="staff-info">
										<p><i className="fas fa-dot-circle me-2 text-primary"/>Identify patients’ care requirements, focus on their needs and act on them</p>
										<p><i className="fas fa-dot-circle me-2 text-primary "/>Nurture a compassionate environment by providing psychological support</p>
										<p><i className="fas fa-dot-circle me-2 text-primary"/>Resolve or report on patients’ needs or problems</p>
										<p><i className="fas fa-dot-circle me-2 text-primary"/>Prepare patients for examinations and perform routine diagnostic checks (monitor pulse, blood pressure and temperature, provide drugs and injections etc)</p>
										<p><i className="fas fa-dot-circle me-2 text-primary"/>Monitor and record patient’s condition and document provided care services</p>
										<p><i className="fas fa-dot-circle me-2 text-primary"/>Treat medical emergencies</p>
									</div>
									<hr/>
									<h4 className="fs-20 font-w600">Experience</h4>
									<div className="staff-info">
										<p><i className="fas fa-dot-circle me-2 text-primary"/>Lorem Ipsum is simply dummy text of the printing and typesetting industrypsychological suppor.</p>
										<p><i className="fas fa-dot-circle me-2 text-primary"/>Nurture a compassionate environment by providing psychological support</p>
										<p><i className="fas fa-dot-circle me-2 text-primary"/>Lorem Ipsum is simply dummy text of the printing and typesetting industry psychological suppor.</p>
										<p><i className="fas fa-dot-circle me-2 text-primary"/>PLorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
										<p><i className="fas fa-dot-circle me-2 text-primary"/>Monitor and record patient’s condition and document provided care services</p>
									</div>
									<hr/>
									<div className="col-lg-12">
										<h4 className="fs-20 font-w600">Education</h4>
										<div className="staff-info">
											<p><i className="fas fa-dot-circle me-2 text-primary"/>Lorem Ipsum is simply dummy text of the printing and typesetting industrypsychological suppor.</p>
											<p><i className="fas fa-dot-circle me-2 text-primary"/>Nurture a compassionate environment by providing psychological support</p>
											<p><i className="fas fa-dot-circle me-2 text-primary"/>Lorem Ipsum is simply dummy text of the printing and typesetting industry psychological suppor.</p>
										</div>
										<hr/>
									</div>
                                </div>                               
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StaffProfile;