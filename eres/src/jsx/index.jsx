import React, {  } from 'react'
/// React router dom
import {Routes, Route, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";
/// Css
import './index.css'
import './chart.css'
import './step.css'

/// Layout
import Nav from './layouts/nav'
import Footer from './layouts/Footer'

/// Dashboard
import Home from "./components/Dashboard/Home";
import DashboardDark from "./components/Dashboard/DashboardDark";
import PatientList from "./components/Dashboard/PatientList";
import PatientDetails from "./components/Dashboard/PatientDetails";
import DoctorList from "./components/Dashboard/DoctorList";
import Doctordetail from "./components/Dashboard/Doctordetail";
import PageReview from "./components/Dashboard/PageReview";
import Task from './components/Dashboard/Task';
import Appointment from './components/Dashboard/Appointment';
import Staff from './components/Dashboard/Staff';
import StaffProfile from './components/Dashboard/StaffProfile';

/// App
import AppProfile from './components/AppsMenu/AppProfile/AppProfile'
import PostDetails from './components/AppsMenu/AppProfile/PostDetails'
import Compose from './components/AppsMenu/Email/Compose/Compose'
import Inbox from './components/AppsMenu/Email/Inbox/Inbox'
import Read from './components/AppsMenu/Email/Read/Read'
import Calendar from './components/AppsMenu/Calendar/Calendar'

/// Product List
import ProductGrid from './components/AppsMenu/Shop/ProductGrid/ProductGrid'
import ProductList from './components/AppsMenu/Shop/ProductList/ProductList'
import ProductDetail from './components/AppsMenu/Shop/ProductGrid/ProductDetail'
import Checkout from './components/AppsMenu/Shop/Checkout/Checkout'
import Invoice from './components/AppsMenu/Shop/Invoice/Invoice'
import ProductOrder from './components/AppsMenu/Shop/ProductOrder'
import EcomCustomers from './components/AppsMenu/Shop/Customers/Customers'

/// Charts
import RechartJs from './components/charts/rechart'
import ChartJs from './components/charts/Chartjs'
import SparklineChart from './components/charts/Sparkline'
import ApexChart from './components/charts/apexcharts'

/// Bootstrap
import UiAlert from './components/bootstrap/Alert'
import UiAccordion from './components/bootstrap/Accordion'
import UiBadge from './components/bootstrap/Badge'
import UiButton from './components/bootstrap/Button'
import UiModal from './components/bootstrap/Modal'
import UiButtonGroup from './components/bootstrap/ButtonGroup'
import UiListGroup from './components/bootstrap/ListGroup'
import UiCards from './components/bootstrap/Cards'
import UiCarousel from './components/bootstrap/Carousel'
import UiDropDown from './components/bootstrap/DropDown'
import UiPopOver from './components/bootstrap/PopOver'
import UiProgressBar from './components/bootstrap/ProgressBar'
import UiTab from './components/bootstrap/Tab'
import UiPagination from './components/bootstrap/Pagination'
import UiGrid from './components/bootstrap/Grid'
import UiTypography from './components/bootstrap/Typography'

/// Plugins
import Select2 from './components/PluginsMenu/Select2/Select2'
import MainSweetAlert from './components/PluginsMenu/SweetAlert/SweetAlert'
import Toastr from './components/PluginsMenu/Toastr/Toastr'
// import JqvMap from './components/PluginsMenu/JqvMap/JqvMap'
import Lightgallery from './components/PluginsMenu/Lightgallery/Lightgallery'


/// Widget
import Widget from './pages/Widget'

/// Table
import DataTable from './components/table/DataTable'
import BootstrapTable from './components/table/BootstrapTable'
import SortingTable from "./components/table/SortingTable/SortingTable";
import FilteringTable from "./components/table/FilteringTable/FilteringTable";


/// Form
import Element from './components/Forms/Element/Element'
import Wizard from './components/Forms/Wizard/Wizard'
import CkEditor from './components/Forms/CkEditor/CkEditor'
import Pickers from './components/Forms/Pickers/Pickers'
import FormValidation from './components/Forms/FormValidation/FormValidation'

/// Pages
import Registration from './pages/Registration'
import Login from './pages/Login'
import LockScreen from './pages/LockScreen'
import Error400 from './pages/Error400'
import Error403 from './pages/Error403'
import Error404 from './pages/Error404'
import Error500 from './pages/Error500'
import Error503 from './pages/Error503'
import Todo from './pages/Todo';

//Scroll To Top
import ScrollToTop from './layouts/ScrollToTop';


const Markup = () => {
  
  const allroutes = [
    /// Dashboard
    { url: "", component: <Home/> },
    { url: "dashboard", component: <Home/> },
    { url: 'dashboard-dark', component: <DashboardDark/> },
    { url: "patient-list", component: <PatientList/> },
    { url: "patient-details", component: <PatientDetails/> },
    { url: "doctor-list", component: <DoctorList/> },
    { url: "doctor-details", component: <Doctordetail/> },
    { url: "reviews", component: <PageReview/> },
    { url: 'task', component: <Task/> },
    { url: 'appointment', component: <Appointment/> },
    { url: 'staff', component: <Staff/> },
    { url: 'staff-profile', component: <StaffProfile/> },
    
    /// Apps
    { url: 'app-profile', component: <AppProfile/> },
    { url: 'post-details', component: <PostDetails/> },
    { url: 'email-compose', component: <Compose/> },
    { url: 'email-inbox', component: <Inbox/> },
    { url: 'email-read', component: <Read/> },
    { url: 'app-calender', component: <Calendar/> },
    
    /// Shop
    { url: 'ecom-product-grid', component: <ProductGrid/> },
    { url: 'ecom-product-list', component: <ProductList/> },
    { url: 'ecom-product-detail', component: <ProductDetail/> },
    { url: 'ecom-product-order', component: <ProductOrder/> },
    { url: 'ecom-checkout', component: <Checkout/> },
    { url: 'ecom-invoice', component: <Invoice/> },
    { url: 'ecom-product-detail', component: <ProductDetail/> },
    { url: 'ecom-customers', component: <EcomCustomers/> },

    /// Chart
    { url: 'chart-sparkline', component: <SparklineChart/> },
    { url: 'chart-chartjs', component: <ChartJs/> },
    { url: 'chart-apexchart', component: <ApexChart/> },
    { url: 'chart-rechart', component: <RechartJs/> },

    /// Bootstrap
    { url: 'ui-alert', component: <UiAlert/> },
    { url: 'ui-badge', component: <UiBadge/> },
    { url: 'ui-button', component: <UiButton/> },
    { url: 'ui-modal', component: <UiModal/> },
    { url: 'ui-button-group', component: <UiButtonGroup/> },
    { url: 'ui-accordion', component: <UiAccordion/> },
    { url: 'ui-list-group', component: <UiListGroup/> },
    { url: 'ui-card', component: <UiCards/> },
    { url: 'ui-carousel', component: <UiCarousel/> },
    { url: 'ui-dropdown', component: <UiDropDown/> },
    { url: 'ui-popover', component: <UiPopOver/> },
    { url: 'ui-progressbar', component: <UiProgressBar/> },
    { url: 'ui-tab', component: <UiTab/> },
    { url: 'ui-pagination', component: <UiPagination/> },
    { url: 'ui-typography', component: <UiTypography/> },
    { url: 'ui-grid', component: <UiGrid/> },

    /// Plugin
    { url: 'uc-select2', component: <Select2/> },    
    { url: 'uc-sweetalert', component: <MainSweetAlert/> },
    { url: 'uc-toastr', component: <Toastr/> },
    { url: 'uc-lightgallery', component: <Lightgallery/> },


    /// Widget
    { url: 'widget-basic', component: <Widget/> },

    /// Form
    { url: 'form-element', component: <Element/> },
    { url: 'form-wizard', component: <Wizard/> },
    { url: 'form-ckeditor', component: <CkEditor/> },
    { url: 'form-pickers', component: <Pickers/> },
    { url: 'form-validation', component: <FormValidation/> },

    /// table
    { url: 'table-datatable-basic', component: <DataTable/> },
    { url: 'table-bootstrap-basic', component: <BootstrapTable/> },
    { url: 'table-filtering', component: <FilteringTable/> },
    { url: 'table-sorting', component: <SortingTable/> },

    /// pages
    { url: 'page-register', component: <Registration/> },
    { url: 'page-lock-screen', component: <LockScreen/> },
    { url: 'page-login', component: <Login/> },
    { url: 'page-error-400', component: <Error400 /> },
    { url: 'page-error-403', component: <Error403 /> },
    { url: 'page-error-404', component: <Error404 /> },
    { url: 'page-error-500', component: <Error500 /> },
    { url: 'page-error-503', component: <Error503 /> },
    { url: 'todo', component: <Todo/> },
  ]

  return (
     <> 
         
         <Routes>
            <Route path='page-lock-screen' element= {<LockScreen />} />
            <Route path='page-error-400' element={<Error400/>} />
            <Route path='page-error-403' element={<Error403/>} />
            <Route path='page-error-404' element={<Error404/>} />
            <Route path='page-error-500' element={<Error500/>} />
            <Route path='page-error-503' element={<Error503/>} />
            <Route  element={<MainLayout />} > 
                {allroutes.map((data, i) => (
                  <Route
                    key={i}
                    exact
                    path={`${data.url}`}
                    element={data.component}
                  />
                ))}
            </Route>
          </Routes>        
          <ScrollToTop />
      </>
  )
}


function MainLayout(){
  const sideMenu = useSelector(state => state.sideMenu);
  return (
    <div id="main-wrapper" className={`show ${ sideMenu ? "menu-toggle" : ""}`}>  
      <Nav />
      <div className="content-body" style={{ minHeight: window.screen.height - 15 }}>
          <div className="container-fluid">
            <Outlet />                
          </div>
      </div>
      <Footer />
    </div>
  )

};

export default Markup