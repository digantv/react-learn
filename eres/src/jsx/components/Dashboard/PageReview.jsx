import React from "react";
import { Link } from "react-router-dom";

//Image
import doctors6 from "../../../assets/images/doctors/6.jpg";
import doctors7 from "../../../assets/images/doctors/7.jpg";
import doctors17 from "../../../assets/images/doctors/17.jpg";
import doctors18 from "../../../assets/images/doctors/18.jpg";
import doctors19 from "../../../assets/images/doctors/19.jpg";
import doctors20 from "../../../assets/images/doctors/20.jpg";

// Import Bootstrap
import { Dropdown, Nav, Tab } from "react-bootstrap";

const PageReview = () => {
   return (
      <div className="h-70 ms-0">
         <div className="page-titles">
            <ol className="breadcrumb">
               <li className="breadcrumb-item active">
                  <Link to="/reviews">Settings</Link>
               </li>
               <li className="breadcrumb-item">
                  <Link to="/reviews">Reviews</Link>
               </li>
            </ol>
         </div>
         <div className="form-head d-flex mb-3 mb-md-4 align-items-start">
            <div className="me-auto d-none d-lg-block">
               <Link to="#" className="btn btn-primary btn-rounded me-2">
                  Publish
               </Link>
               <Link to="#" className="btn btn-danger btn-rounded">
                  Delete
               </Link>
            </div>
            <div className="input-group search-area ms-auto d-inline-flex">
               <input
                  type="text"
                  className="form-control"
                  placeholder="Search here"
               />
               <div className="input-group-append">
                  <button type="button" className="input-group-text">
                     <i className="flaticon-381-search-2" />
                  </button>
               </div>
            </div>
            <Dropdown className="dropdown ms-2 d-inline-block">
               <Dropdown.Toggle
                  className="btn btn-primary light btn-rounded dropdown-toggle"
                  data-toggle="dropdown"
               >
                  Newest
               </Dropdown.Toggle>
               <Dropdown.Menu className="dropdown-menu dropdown-menu-left">
                  <Dropdown.Item className="dropdown-item" to="/reviews">
                     Newest
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" to="/reviews">
                     Old
                  </Dropdown.Item>
               </Dropdown.Menu>
            </Dropdown>
         </div>
         <div className="row">
            <div className="col-xl-12">
               <Tab.Container defaultActiveKey="navpills-1">
                  <Nav as="ul" className="nav nav-pills review-tab">
                     <Nav.Item as="li" className="nav-item">
                        <Nav.Link
                           eventKey="navpills-1"
                           className="nav-link "
                           data-toggle="tab"
                           aria-expanded="false"
                        >
                           All Review
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item as="li" className="nav-item">
                        <Nav.Link
                           eventKey="navpills-2"
                           className="nav-link"
                           data-toggle="tab"
                           aria-expanded="false"
                        >
                           Published
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item as="li" className="nav-item">
                        <Nav.Link
                           eventKey="navpills-3"
                           className="nav-link"
                           data-toggle="tab"
                           aria-expanded="true"
                        >
                           Deleted
                        </Nav.Link>
                     </Nav.Item>
                  </Nav>
                  <Tab.Content className="tab-content">
                     <Tab.Pane eventKey="navpills-1" className="tab-pane ">
                        <div className="card review-table">
                           <div className="media align-items-center">
                              <div className="checkbox me-lg-4 me-0 align-self-center">
                                 <div className="form-check custom-checkbox checkbox-primary  d-none d-lg-block">
                                    <input
                                       type="checkbox"
                                       className="form-check-input"
                                       id="customCheckBox1"
                                       required
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="customCheckBox1"
                                    />
                                 </div>
                              </div>
                              <img
                                 className="me-3 img-fluid rounded"
                                 width={90}
                                 src={doctors6}
                                 alt="DexignZone"
                              />
                              <div className="media-body d-lg-flex d-block row align-items-center">
                                 <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                                    <h3 className="fs-20 font-w600 mb-1">
                                       <Link className="text-black" to="/reviews">Glee Smiley</Link>
                                    </h3>
                                    <span className="fs-15 d-block">Sunday, 25 July 2024 04:55 PM</span>
                                    <span className="text-primary d-block font-w600 mt-sm-2 mt-3">
                                       <i className="las la-stethoscope scale5 me-3" />
                                       Diabetes
                                    </span>
                                 </div>
                                 <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-lg-0 mb-2">
                                    When I came with my mother, I was very
                                    nervous. But after entering here I felt
                                    warmed with smiling
                                 </div>
                              </div>
                              <div className="media-footer d-xl-flex d-block align-items-center">
                                 <div className="disease me-5">
                                    <span className="star-review ms-lg-3 mb-sm-0 mb-2 ms-0 d-inline-block">
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star text-gray" />
                                    </span>
                                 </div>
                                 <div className="edit ms-auto">
                                    <Link to="/reviews" className="text-primary font-w600 me-4">
                                       PUBLISH
                                    </Link>
                                    <Link to="/reviews" className="text-danger font-w600">
                                       DELETE
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="card review-table">
                           <div className="media align-items-center">
                              <div className="checkbox me-lg-4 me-0 align-self-center">
                                 <div className="form-check custom-checkbox checkbox-primary  d-none d-lg-block">
                                    <input type="checkbox" className="form-check-input"  id="customCheckBox2" required/>
                                    <label className="form-check-label" htmlFor="customCheckBox2"/>
                                 </div>
                              </div>
                              <img
                                 className="me-3 img-fluid rounded"
                                 width={90}
                                 src={doctors17}
                                 alt="DexignZone"
                              />
                              <div className="media-body d-lg-flex d-block row align-items-center">
                                 <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                                    <h3 className="fs-20 font-w600 mb-1">
                                       <Link
                                          className="text-black"
                                          to="/reviews"
                                       >
                                          Alexia Kev
                                       </Link>
                                    </h3>
                                    <span className="fs-15 d-block">
                                       Sunday, 25 July 2024 04:55 PM
                                    </span>
                                    <span className="text-primary d-block font-w600 mt-sm-2 mt-3">
                                       <i className="las la-stethoscope scale5 me-3" />
                                       Allergies &amp; Atshma
                                    </span>
                                 </div>
                                 <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-lg-0 mb-2">
                                    Thanks for all the services, no doubt it is
                                    the best hospital. My kidney, BP, diabetes
                                    problem
                                 </div>
                              </div>
                              <div className="media-footer d-xl-flex d-block align-items-center">
                                 <div className="disease me-5">
                                    <span className="star-review ms-lg-3 mb-sm-0 mb-2 ms-0 d-inline-block">
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star text-gray" />
                                    </span>
                                 </div>
                                 <div className="edit ms-auto">
                                    <Link
                                       to="/reviews"
                                       className="text-primary font-w600 me-4"
                                    >
                                       PUBLISH
                                    </Link>
                                    <Link
                                       to="/reviews"
                                       className="text-danger font-w600"
                                    >
                                       DELETE
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="card review-table">
                           <div className="media align-items-center">
                              <div className="checkbox me-lg-4 me-0 align-self-center">
                                 <div className="form-check custom-checkbox checkbox-primary  d-none d-lg-block">
                                    <input
                                       type="checkbox"
                                       className="form-check-input"
                                       id="customCheckBox3"
                                       required
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="customCheckBox3"
                                    />
                                 </div>
                              </div>
                              <img
                                 className="me-3 img-fluid rounded"
                                 width={90}
                                 src={doctors18}
                                 alt="DexignZone"
                              />
                              <div className="media-body d-lg-flex d-block row align-items-center">
                                 <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                                    <h3 className="fs-20 font-w600 mb-1">
                                       <Link
                                          className="text-black"
                                          to="/reviews"
                                       >
                                          Brian Lucky
                                       </Link>
                                    </h3>
                                    <span className="fs-15 d-block">
                                       Sunday, 25 July 2024 04:55 PM
                                    </span>
                                    <span className="text-primary d-block font-w600 mt-sm-2 mt-3">
                                       <i className="las la-stethoscope scale5 me-3" />
                                       Dental Care
                                    </span>
                                 </div>
                                 <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-lg-0 mb-2">
                                    Hospital &amp; staff were extremely warm
                                    &amp; quick in getting me start with the
                                    procedures
                                 </div>
                              </div>
                              <div className="media-footer d-xl-flex d-block align-items-center">
                                 <div className="disease me-5">
                                    <span className="star-review ms-lg-3 mb-sm-0 mb-2 ms-0 d-inline-block">
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star text-gray" />
                                    </span>
                                 </div>
                                 <div className="edit ms-auto">
                                    <Link
                                       to="/reviews"
                                       className="text-primary font-w600 me-4"
                                    >
                                       PUBLISH
                                    </Link>
                                    <Link
                                       to="/reviews"
                                       className="text-danger font-w600"
                                    >
                                       DELETE
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="card review-table">
                           <div className="media align-items-center">
                              <div className="checkbox me-lg-4 me-0 align-self-center">
                                 <div className="form-check custom-checkbox checkbox-primary  d-none d-lg-block">
                                    <input
                                       type="checkbox"
                                       className="form-check-input"
                                       id="customCheckBox4"
                                       required
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="customCheckBox4"
                                    />
                                 </div>
                              </div>
                              <img
                                 className="me-3 img-fluid rounded"
                                 width={90}
                                 src={doctors19}
                                 alt="DexignZone"
                              />
                              <div className="media-body d-lg-flex d-block row align-items-center">
                                 <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                                    <h3 className="fs-20 font-w600 mb-1">
                                       <Link
                                          className="text-black"
                                          to="/reviews"
                                       >
                                          Don Jhon
                                       </Link>
                                    </h3>
                                    <span className="fs-15 d-block">
                                       Sunday, 25 July 2024 04:55 PM
                                    </span>
                                    <span className="text-primary d-block font-w600 mt-sm-2 mt-3">
                                       <i className="las la-stethoscope scale5 me-3" />
                                       Physical Therapy
                                    </span>
                                 </div>
                                 <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-lg-0 mb-2">
                                    I am very much glad to note my feedback and
                                    grateful. Thanks to Dr. Chibber and
                                    assistants. I got very good guidelines for
                                    my patient.
                                 </div>
                              </div>
                              <div className="media-footer d-xl-flex d-block align-items-center">
                                 <div className="disease me-5">
                                    <span className="star-review ms-lg-3 mb-sm-0 mb-2 ms-0 d-inline-block">
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star text-gray" />
                                    </span>
                                 </div>
                                 <div className="edit ms-auto">
                                    <Link
                                       to="/reviews"
                                       className="text-primary font-w600 me-4"
                                    >
                                       PUBLISH
                                    </Link>
                                    <Link
                                       to="/reviews"
                                       className="text-danger font-w600"
                                    >
                                       DELETE
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="card review-table">
                           <div className="media align-items-center">
                              <div className="checkbox me-lg-4 me-0 align-self-center">
                                 <div className="form-check custom-checkbox checkbox-primary  d-none d-lg-block">
                                    <input
                                       type="checkbox"
                                       className="form-check-input"
                                       id="customCheckBox5"
                                       required
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="customCheckBox5"
                                    />
                                 </div>
                              </div>
                              <img
                                 className="me-3 img-fluid rounded"
                                 width={90}
                                 src={doctors20}
                                 alt="DexignZone"
                              />
                              <div className="media-body d-lg-flex d-block row align-items-center">
                                 <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                                    <h3 className="fs-20 font-w600 mb-1">
                                       <Link
                                          className="text-black"
                                          to="/reviews"
                                       >
                                          Olivia Smuth
                                       </Link>
                                    </h3>
                                    <span className="fs-15 d-block">
                                       Sunday, 25 July 2024 04:55 PM
                                    </span>
                                    <span className="text-primary d-block font-w600 mt-sm-2 mt-3">
                                       <i className="las la-stethoscope scale5 me-3" />
                                       Allergies &amp; Atshma
                                    </span>
                                 </div>
                                 <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-lg-0 mb-2">
                                    It was never a feeling as if I was in a
                                    hospital. I got the best care. The response
                                    of each staff, right from security
                                    (screening), housekeeping, admission staff,
                                    nurses, trainee doctor, Doctor was
                                    excellent.
                                 </div>
                              </div>
                              <div className="media-footer d-xl-flex d-block align-items-center">
                                 <div className="disease me-5">
                                    <span className="star-review ms-lg-3 mb-sm-0 mb-2 ms-0 d-inline-block">
                                      <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star text-gray" />
                                    </span>
                                 </div>
                                 <div className="edit ms-auto">
                                    <Link
                                       to="/reviews"
                                       className="text-primary font-w600 me-4"
                                    >
                                       PUBLISH
                                    </Link>
                                    <Link
                                       to="/reviews"
                                       className="text-danger font-w600"
                                    >
                                       DELETE
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Tab.Pane>
                     <Tab.Pane eventKey="navpills-2" className="tab-pane">
                        <div className="card review-table">
                           <div className="media align-items-center">
                              <div className="checkbox me-lg-4 ms-0 align-self-center">
                                 <div className="form-check custom-checkbox checkbox-primary  d-none d-lg-block">
                                    <input
                                       type="checkbox"
                                       className="form-check-input"
                                       id="customCheckBox6"
                                       required
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="customCheckBox6"
                                    />
                                 </div>
                              </div>
                              <img
                                 className="me-3 img-fluid rounded"
                                 width={90}
                                 src={doctors18}
                                 alt="DexignZone"
                              />
                              <div className="media-body d-lg-flex d-block row align-items-center">
                                 <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                                    <h3 className="fs-20 font-w600 mb-1">
                                       <Link
                                          className="text-black"
                                          to="/reviews"
                                       >
                                          Glee Smiley
                                       </Link>
                                    </h3>
                                    <span className="fs-15 d-block">
                                       Sunday, 25 July 2024 04:55 PM
                                    </span>
                                    <span className="text-primary d-block font-w600 mt-sm-2 mt-3">
                                       <i className="las la-stethoscope scale5 me-3" />
                                       Diabetes
                                    </span>
                                 </div>
                                 <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-lg-0 mb-2">
                                    When I came with my mother, I was very
                                    nervous. But after entering here I felt
                                    warmed with smiling
                                 </div>
                              </div>
                              <div className="media-footer d-xl-flex d-block align-items-center">
                                 <div className="disease me-5">
                                    <span className="star-review ms-lg-3 mb-sm-0 mb-2 ms-0 d-inline-block">
                                      <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star text-gray" />
                                    </span>
                                 </div>
                                 <div className="edit ms-auto">
                                    <Link
                                       to="/reviews"
                                       className="text-primary font-w600 me-4"
                                    >
                                       PUBLISH
                                    </Link>
                                    <Link
                                       to="/reviews"
                                       className="text-danger font-w600"
                                    >
                                       DELETE
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="card review-table">
                           <div className="media align-items-center">
                              <div className="checkbox me-lg-4 ms-0 align-self-center">
                                 <div className="form-check custom-checkbox checkbox-primary  d-none d-lg-block">
                                    <input
                                       type="checkbox"
                                       className="form-check-input"
                                       id="customCheckBox7"
                                       required
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="customCheckBox7"
                                    />
                                 </div>
                              </div>
                              <img
                                 className="me-3 img-fluid rounded"
                                 width={90}
                                 src={doctors17}
                                 alt="DexignZone"
                              />
                              <div className="media-body d-lg-flex d-block row align-items-center">
                                 <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                                    <h3 className="fs-20 font-w600 mb-1">
                                       <Link
                                          className="text-black"
                                          to="/reviews"
                                       >
                                          Alexia Kev
                                       </Link>
                                    </h3>
                                    <span className="fs-15 d-block">
                                       Sunday, 25 July 2024 04:55 PM
                                    </span>
                                    <span className="text-primary d-block font-w600 mt-sm-2 mt-3">
                                       <i className="las la-stethoscope scale5 me-3" />
                                       Allergies &amp; Atshma
                                    </span>
                                 </div>
                                 <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-lg-0 mb-2">
                                    Thanks for all the services, no doubt it is
                                    the best hospital. My kidney, BP, diabetes
                                    problem
                                 </div>
                              </div>
                              <div className="media-footer d-xl-flex d-block align-items-center">
                                 <div className="disease me-5">
                                    <span className="star-review ms-lg-3 mb-sm-0 mb-2 ms-0 d-inline-block">
                                     <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star text-gray" />
                                    </span>
                                 </div>
                                 <div className="edit ms-auto">
                                    <Link
                                       to="/reviews"
                                       className="text-primary font-w600 me-4"
                                    >
                                       PUBLISH
                                    </Link>
                                    <Link
                                       to="/reviews"
                                       className="text-danger font-w600"
                                    >
                                       DELETE
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="card review-table">
                           <div className="media align-items-center">
                              <div className="checkbox me-lg-4 me-0 align-self-center">
                                 <div className="form-check custom-checkbox checkbox-primary  d-none d-lg-block">
                                    <input
                                       type="checkbox"
                                       className="form-check-input"
                                       id="customCheckBox8"
                                       required
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="customCheckBox8"
                                    />
                                 </div>
                              </div>
                              <img
                                 className="me-3 img-fluid rounded"
                                 width={90}
                                 src={doctors18}
                                 alt="DexignZone"
                              />
                              <div className="media-body d-lg-flex d-block row align-items-center">
                                 <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                                    <h3 className="fs-20 font-w600 mb-1">
                                       <Link
                                          className="text-black"
                                          to="/reviews"
                                       >
                                          Brian Lucky
                                       </Link>
                                    </h3>
                                    <span className="fs-15 d-block">
                                       Sunday, 25 July 2024 04:55 PM
                                    </span>
                                    <span className="text-primary d-block font-w600 mt-sm-2 mt-3">
                                       <i className="las la-stethoscope scale5 me-3" />
                                       Dental Care
                                    </span>
                                 </div>
                                 <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-lg-0 mb-2">
                                    Hospital &amp; staff were extremely warm
                                    &amp; quick in getting me start with the
                                    procedures
                                 </div>
                              </div>
                              <div className="media-footer d-xl-flex d-block align-items-center">
                                 <div className="disease me-5">
                                    <span className="star-review ms-lg-3 mb-sm-0 mb-2 ms-0 d-inline-block">
                                      <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star text-gray" />
                                    </span>
                                 </div>
                                 <div className="edit ms-auto">
                                    <Link
                                       to="/reviews"
                                       className="text-primary font-w600 me-4"
                                    >
                                       PUBLISH
                                    </Link>
                                    <Link
                                       to="/reviews"
                                       className="text-danger font-w600"
                                    >
                                       DELETE
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Tab.Pane>
                     <Tab.Pane eventKey="navpills-3" className="tab-pane">
                        <div className="card review-table">
                           <div className="media align-items-center">
                              <div className="checkbox me-lg-4 me-0 align-self-center">
                                 <div className="form-check custom-checkbox checkbox-primary  d-none d-lg-block">
                                    <input
                                       type="checkbox"
                                       className="form-check-input"
                                       id="customCheckBox9"
                                       required
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="customCheckBox9"
                                    />
                                 </div>
                              </div>
                              <img
                                 className="me-3 img-fluid rounded"
                                 width={90}
                                 src={doctors18}
                                 alt="DexignZone"
                              />
                              <div className="media-body d-lg-flex d-block row align-items-center">
                                 <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                                    <h3 className="fs-20 font-w600 mb-1">
                                       <Link
                                          className="text-black"
                                          to="/reviews"
                                       >
                                          Brian Lucky
                                       </Link>
                                    </h3>
                                    <span className="fs-15 d-block">
                                       Sunday, 25 July 2024 04:55 PM
                                    </span>
                                    <span className="text-primary d-block font-w600 mt-sm-2 mt-3">
                                       <i className="las la-stethoscope scale5 me-3" />
                                       Dental Care
                                    </span>
                                 </div>
                                 <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-lg-0 mb-2">
                                    Hospital &amp; staff were extremely warm
                                    &amp; quick in getting me start with the
                                    procedures
                                 </div>
                              </div>
                              <div className="media-footer d-xl-flex d-block align-items-center">
                                 <div className="disease me-5">
                                    <span className="star-review ms-lg-3 mb-sm-0 mb-2 ms-0 d-inline-block">
                                      <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star text-gray" />
                                    </span>
                                 </div>
                                 <div className="edit ms-auto">
                                    <Link
                                       to="/reviews"
                                       className="text-primary font-w600 me-4"
                                    >
                                       PUBLISH
                                    </Link>
                                    <Link
                                       to="/reviews"
                                       className="text-danger font-w600"
                                    >
                                       DELETE
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="card review-table">
                           <div className="media align-items-center">
                              <div className="checkbox me-lg-4 me-0 align-self-center">
                                 <div className="form-check custom-checkbox checkbox-primary  d-none d-lg-block">
                                    <input
                                       type="checkbox"
                                       className="form-check-input"
                                       id="customCheckBox10"
                                       required
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="customCheckBox10"
                                    />
                                 </div>
                              </div>
                              <img
                                 className="me-3 img-fluid rounded"
                                 width={90}
                                 src={doctors7}
                                 alt="DexignZone"
                              />
                              <div className="media-body d-lg-flex d-block row align-items-center">
                                 <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                                    <h3 className="fs-20 font-w600 mb-1">
                                       <Link
                                          className="text-black"
                                          to="/reviews"
                                       >
                                          Brian Lucky
                                       </Link>
                                    </h3>
                                    <span className="fs-15 d-block">
                                       Sunday, 25 July 2024 04:55 PM
                                    </span>
                                    <span className="text-primary d-block font-w600 mt-sm-2 mt-3">
                                       <i className="las la-stethoscope scale5 me-3" />
                                       Dental Care
                                    </span>
                                 </div>
                                 <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-lg-0 mb-2">
                                    Hospital &amp; staff were extremely warm
                                    &amp; quick in getting me start with the
                                    procedures
                                 </div>
                              </div>
                              <div className="media-footer d-xl-flex d-block align-items-center">
                                 <div className="disease me-5">
                                    <span className="star-review ms-lg-3 mb-sm-0 mb-2 ms-0 d-inline-block">
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star me-1 text-orange" />
                                       <i className="fa fa-star text-gray" />
                                    </span>
                                 </div>
                                 <div className="edit ms-auto">
                                    <Link
                                       to="/reviews"
                                       className="text-primary font-w600 me-4"
                                    >
                                       PUBLISH
                                    </Link>
                                    <Link
                                       to="/reviews"
                                       className="text-danger font-w600"
                                    >
                                       DELETE
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Tab.Pane>
                  </Tab.Content>
               </Tab.Container>
            </div>
         </div>
      </div>
   );
};

export default PageReview;
