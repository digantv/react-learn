import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

//Images
import doctors1 from "../../../assets/images/doctors/1.jpg";
import doctors9 from "../../../assets/images/doctors/9.jpg";
import doctors10 from "../../../assets/images/doctors/10.jpg";
import doctors11 from "../../../assets/images/doctors/11.jpg";
import doctors12 from "../../../assets/images/doctors/12.jpg";
import doctors13 from "../../../assets/images/doctors/13.jpg";
import doctors14 from "../../../assets/images/doctors/14.jpg";
import doctors15 from "../../../assets/images/doctors/15.jpg";
import doctors16 from "../../../assets/images/doctors/16.jpg";


const DoctorList = () => {
   const [data, setData] = useState(
      document.querySelectorAll("#doctor_list tbody tr")
   );
   const sort = 10;
   const activePag = useRef(0);
   const [test, settest] = useState(0);

   // Active data
   const chageData = (frist, sec) => {
      for (var i = 0; i < data.length; ++i) {
         if (i >= frist && i < sec) {
            data[i].classList.remove("d-none");
         } else {
            data[i].classList.add("d-none");
         }
      }
   };
   // use effect
   useEffect(() => {
      setData(document.querySelectorAll("#doctor_list tbody tr"));
   }, [test]);

   // Active pagginarion
   activePag.current === 0 && chageData(0, sort);
   // paggination
   let paggination = Array(Math.ceil(data.length / sort))
      .fill()
      .map((_, i) => i + 1);

   
   const onClick = (i) => {
      activePag.current = i;
      chageData(activePag.current * sort, (activePag.current + 1) * sort);
      settest(i);
   };

   const chackbox = document.querySelectorAll(".doctor_checkbox input");
   const motherChackBox = document.querySelector(".doctor_strg input");   
   const chackboxFun = (type) => {
      for (let i = 0; i < chackbox.length; i++) {
         const element = chackbox[i];
         if (type === "all") {
            if (motherChackBox.checked) {
               element.checked = true;
            } else {
               element.checked = false;
            }
         } else {
            if (!element.checked) {
               motherChackBox.checked = false;
               break;
            } else {
               motherChackBox.checked = true;
            }
         }
      }
   };

   return (
      <>
         <div className="form-head d-flex mb-3 mb-md-4 align-items-start">
            <div className="me-auto d-lg-block">
               <Link
                  to="/doctor-details"
                  className="btn btn-primary btn-rounded"
               >
                  + Add New
               </Link>
            </div>
            <div className="input-group search-area ms-auto d-inline-flex me-2">
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
            <Link to="/doctor-list" className="settings-icon">
               <i className="flaticon-381-settings-2 me-0" />
            </Link>
         </div>
         <div className="row">
            <div className="col-xl-12">
               {/* Table */}
               <div className="table-responsive">
                  <div id="example5_wrapper" className="dataTables_wrapper no-footer">
                     <table id="doctor_list" className="table shadow-hover  mb-4 table-responsive-xl dataTablesCard fs-14 dataTable no-footer" >
                        <thead>
                           <tr role="row">
                              <th
                                 className="doctor_strg"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-sort="ascending"
                                 style={{ width: 91 }}
                              >
                                 <div className="checkbox align-self-center">
                                    <div className="form-check custom-checkbox ms-1">
                                       <input
                                          type="checkbox"
                                          onClick={() => chackboxFun("all")}
                                          className="form-check-input"
                                          id="checkAll"
                                          required
                                       />
                                       <label
                                          className="form-check-label"
                                          htmlFor="checkAll"
                                       />
                                    </div>
                                 </div>
                              </th>
                              <th
                                 className="sorting"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-label="ID: activate to sort column ascending"
                                 style={{ width: 61 }}
                              >
                                 ID
                              </th>
                              <th
                                 className="sorting"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-label="Date Join: activate to sort column ascending"
                                 style={{ width: 123 }}
                              >
                                 Date Join
                              </th>
                              <th
                                 className="sorting"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-label="Doctor Name: activate to sort column ascending"
                                 style={{ width: 111 }}
                              >
                                 Doctor Name
                              </th>
                              <th
                                 className="sorting"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-label="Specialist: activate to sort column ascending"
                                 style={{ width: 95 }}
                              >
                                 Specialist
                              </th>
                              <th
                                 className="sorting"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-label="Schedule: activate to sort column ascending"
                                 style={{ width: 124 }}
                              >
                                 Schedule
                              </th>
                              <th
                                 className="sorting"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-label="Contact: activate to sort column ascending"
                                 style={{ width: 79 }}
                              >
                                 Contact
                              </th>
                              <th
                                 className="sorting"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-label="Status: activate to sort column ascending"
                                 style={{ width: 98 }}
                              >
                                 Status
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr role="row" className="odd">
                              <td className="doctor_checkbox">
                                 <div className="d-flex align-items-center">
                                    <div className="checkbox text-right align-self-center">
                                       <div className="form-check custom-checkbox ">
                                          <input
                                             type="checkbox"
                                             onClick={() => chackboxFun()}
                                             className="form-check-input"
                                             id="customCheckBox2"
                                             required
                                          />
                                          <label
                                             className="form-check-label"
                                             htmlFor="customCheckBox2"
                                          />
                                       </div>
                                    </div>
                                    <img
                                       alt=""
                                       src={doctors9}
                                       height={43}
                                       width={43}
                                       className="rounded-circle ms-4"
                                    />
                                 </div>
                              </td>
                              <td>#P-00012</td>
                              <td>29/08/2024, 12:42 AM</td>
                              <td>Dr. Samantha</td>
                              <td>Dentist</td>
                              <td>
                                 <Link
                                    to="/doctor-list"
                                    className="btn btn-primary light btn-rounded btn-sm text-nowrap"
                                 >
                                    5 Appointment
                                 </Link>
                              </td>
                              <td>
                                 <span className="font-w500">
                                    +12 4124 5125
                                 </span>
                              </td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <span className="text-danger font-w600">
                                       Unavailable
                                    </span>
                                    <Dropdown className="dropdown ms-auto text-right">
                                       <Dropdown.Toggle
                                          variant=""
                                          className="btn-link i-false"
                                       >
                                          <svg
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                          >
                                             <path
                                                d="M12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                          </svg>
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                          <Dropdown.Item                                             
                                             to="/doctor-list"
                                          >
                                             View Detail
                                          </Dropdown.Item>
                                          <Dropdown.Item                                             
                                             to="/doctor-list"
                                          >
                                             Edit
                                          </Dropdown.Item>
                                          <Dropdown.Item                                            
                                             to="/doctor-list"
                                          >
                                             Delete
                                          </Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </div>
                              </td>
                           </tr>
                           <tr role="row" className="even">
                              <td className="doctor_checkbox">
                                 <div className="d-flex align-items-center">
                                    <div className="checkbox text-right align-self-center">
                                       <div className="form-check custom-checkbox ">
                                          <input
                                             type="checkbox"
                                             onClick={() => chackboxFun()}
                                             className="form-check-input"
                                             id="customCheckBox21"
                                             required
                                          />
                                          <label
                                             className="form-check-label"
                                             htmlFor="customCheckBox21"
                                          />
                                       </div>
                                    </div>
                                    <img
                                       alt=""
                                       src={doctors10}
                                       height={43}
                                       width={43}
                                       className="rounded-circle ms-4"
                                    />
                                 </div>
                              </td>
                              <td>#P-00016</td>
                              <td>29/08/2024, 12:42 AM</td>
                              <td>Dr. Cindy Anderson</td>
                              <td>Physical Therapy</td>
                              <td>
                                 <Link
                                    to="/doctor-list"
                                    className="btn btn-primary light btn-rounded btn-sm"
                                 >
                                    2 Appointment
                                 </Link>
                              </td>
                              <td>
                                 <span className="font-w500">
                                    +12 4124 1556
                                 </span>
                              </td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <span className="text-danger font-w600">
                                       Unavailable
                                    </span>
                                    <Dropdown className="dropdown ms-auto text-right">
                                       <Dropdown.Toggle
                                          variant=""
                                          className="btn-link i-false"
                                       >
                                          <svg
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                          >
                                             <path
                                                d="M12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                          </svg>
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             View Detail
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             Edit
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             Delete
                                          </Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </div>
                              </td>
                           </tr>
                           <tr role="row" className="odd">
                              <td className="doctor_checkbox">
                                 <div className="d-flex align-items-center">
                                    <div className="checkbox text-right align-self-center">
                                       <div className="form-check custom-checkbox ">
                                          <input
                                             type="checkbox"
                                             onClick={() => chackboxFun()}
                                             className="form-check-input"
                                             id="customCheckBox22"
                                             required
                                          />
                                          <label
                                             className="form-check-label"
                                             htmlFor="customCheckBox22"
                                          />
                                       </div>
                                    </div>
                                    <img
                                       alt=""
                                       src={doctors11}
                                       height={43}
                                       width={43}
                                       className="rounded-circle ms-4"
                                    />
                                 </div>
                              </td>
                              <td>#P-00015</td>
                              <td>29/08/2024, 12:42 AM</td>
                              <td>Dr. Olivia Jean</td>
                              <td>Dentist</td>
                              <td>
                                 <Link
                                    to="/doctor-list"
                                    className="btn btn-outline-light btn-rounded btn-sm"
                                 >
                                    No Schedule
                                 </Link>
                              </td>
                              <td>
                                 <span className="font-w500">
                                    +12 4156 6675
                                 </span>
                              </td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <span className="text-danger font-w600">
                                       Unavailable
                                    </span>
                                    <Dropdown className="dropdown ms-auto text-right">
                                       <Dropdown.Toggle
                                          variant=""
                                          className="btn-link i-false"
                                       >
                                          <svg
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                          >
                                             <path
                                                d="M12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                          </svg>
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             View Detail
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             Edit
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             Delete
                                          </Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </div>
                              </td>
                           </tr>
                           <tr role="row" className="even">
                              <td className="doctor_checkbox">
                                 <div className="d-flex align-items-center">
                                    <div className="checkbox text-right align-self-center">
                                       <div className="form-check custom-checkbox ">
                                          <input
                                             type="checkbox"
                                             onClick={() => chackboxFun()}
                                             className="form-check-input"
                                             id="customCheckBox24"
                                             required
                                          />
                                          <label
                                             className="form-check-label"
                                             htmlFor="customCheckBox24"
                                          />
                                       </div>
                                    </div>
                                    <img
                                       alt=""
                                       src={doctors12}
                                       height={43}
                                       width={43}
                                       className="rounded-circle ms-4"
                                    />
                                 </div>
                              </td>
                              <td>#P-00014</td>
                              <td>29/08/2024, 12:42 AM</td>
                              <td>Dr. David Lee</td>
                              <td>Nursing</td>
                              <td>
                                 <Link
                                    to="/doctor-list"
                                    className="btn btn-primary light btn-rounded btn-sm"
                                 >
                                    2 Appointment
                                 </Link>
                              </td>
                              <td>
                                 <span className="font-w500">
                                    +12 4155 7623
                                 </span>
                              </td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <span className="text-primary font-w600">
                                       Available
                                    </span>
                                    <Dropdown className="dropdown ms-auto text-right">
                                       <Dropdown.Toggle
                                          variant=""
                                          className="btn-link i-false"
                                       >
                                          <svg
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                          >
                                             <path
                                                d="M12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                          </svg>
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             View Detail
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             Edit
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             Delete
                                          </Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </div>
                              </td>
                           </tr>
                           <tr role="row" className="odd">
                              <td className="doctor_checkbox">
                                 <div className="d-flex align-items-center">
                                    <div className="checkbox text-right align-self-center">
                                       <div className="form-check custom-checkbox ">
                                          <input
                                             type="checkbox"
                                             onClick={() => chackboxFun()}
                                             className="form-check-input"
                                             id="customCheckBox25"
                                             required
                                          />
                                          <label
                                             className="form-check-label"
                                             htmlFor="customCheckBox25"
                                          />
                                       </div>
                                    </div>
                                    <img
                                       alt=""
                                       src={doctors13}
                                       height={43}
                                       width={43}
                                       className="rounded-circle ms-4"
                                    />
                                 </div>
                              </td>
                              <td>#P-00013</td>
                              <td>29/08/2024, 12:42 AM</td>
                              <td>Dr. Marcus Jr</td>
                              <td>Physical Therapy</td>
                              <td>
                                 <Link
                                    to="/doctor-list"
                                    className="btn btn-primary light btn-rounded btn-sm"
                                 >
                                    2 Appointment
                                 </Link>
                              </td>
                              <td>
                                 <span className="font-w500">
                                    +12 4124 5156
                                 </span>
                              </td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <span className="text-danger font-w600">
                                       Unavailable
                                    </span>
                                    <Dropdown className="dropdown ms-auto text-right">
                                       <Dropdown.Toggle
                                          variant=""
                                          className="btn-link i-false"
                                       >
                                          <svg
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                          >
                                             <path
                                                d="M12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                          </svg>
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             View Detail
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             Edit
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             Delete
                                          </Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </div>
                              </td>
                           </tr>
                           <tr role="row" className="even">
                              <td className="doctor_checkbox">
                                 <div className="d-flex align-items-center">
                                    <div className="checkbox text-right align-self-center">
                                       <div className="form-check custom-checkbox ">
                                          <input
                                             type="checkbox"
                                             onClick={() => chackboxFun()}
                                             className="form-check-input"
                                             id="customCheckBox26"
                                             required
                                          />
                                          <label
                                             className="form-check-label"
                                             htmlFor="customCheckBox26"
                                          />
                                       </div>
                                    </div>
                                    <img
                                       alt=""
                                       src={doctors14}
                                       height={43}
                                       width={43}
                                       className="rounded-circle ms-4"
                                    />
                                 </div>
                              </td>
                              <td>#P-00017</td>
                              <td>29/08/2024, 12:42 AM</td>
                              <td>Dr. Kevin Zidan</td>
                              <td>Nursing</td>
                              <td>
                                 <Link
                                    to="/doctor-list"
                                    className="btn btn-outline-light btn-rounded btn-sm"
                                 >
                                    No Schedule
                                 </Link>
                              </td>
                              <td>
                                 <span className="font-w500">
                                    +12 4122 4556
                                 </span>
                              </td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <span className="text-danger font-w600">
                                       Unavailable
                                    </span>
                                    <Dropdown className="dropdown ms-auto text-right">
                                       <Dropdown.Toggle
                                          variant=""
                                          className="btn-link i-false"
                                       >
                                          <svg
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                          >
                                             <path
                                                d="M12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                          </svg>
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             View Detail
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             Edit
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             Delete
                                          </Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </div>
                              </td>
                           </tr>
                           <tr role="row" className="odd">
                              <td className="doctor_checkbox">
                                 <div className="d-flex align-items-center">
                                    <div className="checkbox text-right align-self-center">
                                       <div className="form-check custom-checkbox ">
                                          <input
                                             type="checkbox"
                                             onClick={() => chackboxFun()}
                                             className="form-check-input"
                                             id="customCheckBox27"
                                             required
                                          />
                                          <label
                                             className="form-check-label"
                                             htmlFor="customCheckBox27"
                                          />
                                       </div>
                                    </div>
                                    <img
                                       alt=""
                                       src={doctors15}
                                       height={43}
                                       width={43}
                                       className="rounded-circle ms-4"
                                    />
                                 </div>
                              </td>
                              <td>#P-00018</td>
                              <td>29/08/2024, 12:42 AM</td>
                              <td>Dr. Gustauv Loi</td>
                              <td>Dentist</td>
                              <td>
                                 <Link
                                    to="/doctor-list"
                                    className="btn btn-primary light btn-rounded btn-sm"
                                 >
                                    2 Appointment
                                 </Link>
                              </td>
                              <td>
                                 <span className="font-w500">
                                    +12 2567 8654
                                 </span>
                              </td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <span className="text-primary font-w600">
                                       Available
                                    </span>
                                    <Dropdown className="dropdown ms-auto text-right">
                                       <Dropdown.Toggle
                                          variant=""
                                          className="btn-link i-false"
                                       >
                                          <svg
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                          >
                                             <path
                                                d="M12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                          </svg>
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             View Detail
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             Edit
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             Delete
                                          </Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </div>
                              </td>
                           </tr>
                           <tr role="row" className="even">
                              <td className="doctor_checkbox">
                                 <div className="d-flex align-items-center">
                                    <div className="checkbox text-right align-self-center">
                                       <div className="form-check custom-checkbox ">
                                          <input
                                             type="checkbox"
                                             onClick={() => chackboxFun()}
                                             className="form-check-input"
                                             id="customCheckBox28"
                                             required
                                          />
                                          <label
                                             className="form-check-label"
                                             htmlFor="customCheckBox28"
                                          />
                                       </div>
                                    </div>
                                    <img
                                       alt=""
                                       src={doctors16}
                                       height={43}
                                       width={43}
                                       className="rounded-circle ms-4"
                                    />
                                 </div>
                              </td>
                              <td>#P-00019</td>
                              <td>29/08/2024, 12:42 AM</td>
                              <td>Dr. Samantha</td>
                              <td>Nursing</td>
                              <td>
                                 <Link
                                    to="/doctor-list"
                                    className="btn btn-outline-light btn-rounded btn-sm"
                                 >
                                    No Schedule
                                 </Link>
                              </td>
                              <td>
                                 <span className="font-w500">
                                    +12 4125 6211
                                 </span>
                              </td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <span className="text-danger font-w600">
                                       Unavailable
                                    </span>
                                    <Dropdown className="dropdown ms-auto text-right">
                                       <Dropdown.Toggle
                                          variant=""
                                          className="btn-link i-false"
                                       >
                                          <svg
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                          >
                                             <path
                                                d="M12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                          </svg>
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             View Detail
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             Edit
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             Delete
                                          </Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </div>
                              </td>
                           </tr>
                           <tr role="row" className="odd">
                              <td className="doctor_checkbox">
                                 <div className="d-flex align-items-center">
                                    <div className="checkbox text-right align-self-center">
                                       <div className="form-check custom-checkbox ">
                                          <input
                                             type="checkbox"
                                             onClick={() => chackboxFun()}
                                             className="form-check-input"
                                             id="customCheckBox29"
                                             required
                                          />
                                          <label
                                             className="form-check-label"
                                             htmlFor="customCheckBox29"
                                          />
                                       </div>
                                    </div>
                                    <img
                                       alt=""
                                       src={doctors10}
                                       height={43}
                                       width={43}
                                       className="rounded-circle ms-4"
                                    />
                                 </div>
                              </td>
                              <td>#P-000110</td>
                              <td>29/08/2024, 12:42 AM</td>
                              <td>Dr. David Lee</td>
                              <td>Physical Therapy</td>
                              <td>
                                 <Link
                                    to="/doctor-list"
                                    className="btn btn-primary light btn-rounded btn-sm"
                                 >
                                    2 Appointment
                                 </Link>
                              </td>
                              <td>
                                 <span className="font-w500">
                                    +12 6567 1245
                                 </span>
                              </td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <span className="text-primary font-w600">
                                       Available
                                    </span>
                                    <Dropdown className="dropdown ms-auto text-right">
                                       <Dropdown.Toggle
                                          variant=""
                                          className="btn-link i-false"
                                       >
                                          <svg
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                          >
                                             <path
                                                d="M12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                          </svg>
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             View Detail
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             Edit
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             Delete
                                          </Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </div>
                              </td>
                           </tr>
                           <tr role="row" className="even">
                              <td className="doctor_checkbox">
                                 <div className="d-flex align-items-center">
                                    <div className="checkbox text-right align-self-center">
                                       <div className="form-check custom-checkbox ">
                                          <input
                                             type="checkbox"
                                             onClick={() => chackboxFun()}
                                             className="form-check-input"
                                             id="customCheckBox200"
                                             required
                                          />
                                          <label
                                             className="form-check-label"
                                             htmlFor="customCheckBox200"
                                          />
                                       </div>
                                    </div>
                                    <img
                                       alt=""
                                       src={doctors1}
                                       height={43}
                                       width={43}
                                       className="rounded-circle ms-4"
                                    />
                                 </div>
                              </td>
                              <td>#P-00012</td>
                              <td>29/08/2024, 12:42 AM</td>
                              <td>Dr. Samantha</td>
                              <td>Dentist</td>
                              <td>
                                 <Link
                                    to="/doctor-list"
                                    className="btn btn-primary light btn-rounded btn-sm"
                                 >
                                    5 Appointment
                                 </Link>
                              </td>
                              <td>
                                 <span className="font-w500">
                                    +12 4124 5125
                                 </span>
                              </td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <span className="text-danger font-w600">
                                       Unavailable
                                    </span>
                                    <Dropdown className="dropdown ms-auto text-right">
                                       <Dropdown.Toggle
                                          variant=""
                                          className="btn-link i-false"
                                       >
                                          <svg
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                          >
                                             <path
                                                d="M12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4Z"
                                                stroke="#3E4954"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                          </svg>
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             View Detail
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             Edit
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                             className="dropdown-item"
                                             to="/doctor-list"
                                          >
                                             Delete
                                          </Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                     <div className="d-sm-flex text-center justify-content-between align-items-center">
                        <div
                           className="dataTables_info"
                           id="example5_info"
                           role="status"
                           aria-live="polite"
                        >
                           Showing {activePag.current * sort + 1} to{" "}
                           {data.length > (activePag.current + 1) * sort
                              ? (activePag.current + 1) * sort
                              : data.length}{" "}
                           of {data.length} entries
                        </div>
                        <div className="dataTables_paginate paging_simple_numbers d-flex  justify-content-center align-items-center pb-3">
                           <Link
                              className="paginate_button previous disabled"
                              to="/doctor-list"
                              onClick={() =>
                                 activePag.current > 0 &&
                                 onClick(activePag.current - 1)
                              }
                           >
                              Previous
                           </Link>
                           <span>
                              {paggination.map((number, i) => (
                                 <Link
                                    key={i}
                                    className={`paginate_button  ${
                                       activePag.current === i ? "current" : ""
                                    } ${i > 0 ? "ms-1" : ""}`}
                                    to="/doctor-list"
                                    onClick={() => onClick(i)}
                                 >
                                    {number}
                                 </Link>
                              ))}
                           </span>
                           <Link
                              className="paginate_button next disabled"
                              to="/doctor-list"
                              onClick={() =>
                                 activePag.current + 1 < paggination.length &&
                                 onClick(activePag.current + 1)
                              }
                           >
                              Next
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default DoctorList;
