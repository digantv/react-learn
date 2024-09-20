import React, { Fragment, useEffect,  useReducer, useState } from "react";
import {Collapse} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {MenuList} from './Menu';

const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});

const initialState = {
  active : "",
  activeSubmenu : "",
}

const SideBar = () => {
  const dat = new Date();
  const [state, setState] = useReducer(reducer, initialState);

  const [heartBtn, setHeartBtn] = useState();
   
    const handleMenuActive = status => {		
      setState({active : status});			
      if(state.active === status){				
        setState({active : ""});
      }   
    }
    const handleSubmenuActive = (status) => {		
      setState({activeSubmenu : status})
      if(state.activeSubmenu === status){
        setState({activeSubmenu : ""})			
      }    
    }
    // Menu dropdown list End

    /// Path
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];

    useEffect(() => {
      MenuList.forEach((data) => {
        data.content?.forEach((item) => {
          if (path === item.to) {
            setState({ active: data.title })
          }
          item.content?.forEach(ele => {
            if (path === ele.to) {
              setState({ activeSubmenu: item.title, active: data.title })
            }
          })
        })
      })
    }, [path]);

    return (
      <div className="deznav">
        <div className="deznav-scroll">
          <ul className="metismenu" id="menu">
            {MenuList.map((data, index)=>{
                let menuClass = data.classsChange;
                  if(menuClass === "menu-title"){
                    return(
                        <li className={menuClass}  key={index} >{data.title}</li>
                    )
                  }else{
                    return(				
                      <li className={`has-menu ${ state.active === data.title ? 'mm-active' : ''} ${data.to === path ? 'mm-active' : ''}`}
                        key={index} 
                      >
                        
                        {data.content && data.content.length > 0 ?
                            <Fragment>
                              <Link to={"#"} 
                                className="has-arrow ai-icon"
                                onClick={() => {handleMenuActive(data.title)}}
                              >								
                                  {data.iconStyle}{" "}
                                  <span className="nav-text">{data.title}</span>
                              </Link>                          
                              <Collapse in={state.active === data.title ? true :false}>
                                <ul className={`${menuClass === "mm-collapse" ? "mm-show" : ""}`}>
                                  {data.content && data.content.map((data,index) => {									
                                    return(	
                                      <li key={index}
                                        className={`${ state.activeSubmenu === data.title ? "mm-active" : ""}`}                                    
                                      >
                                        {data.content && data.content.length > 0 ?
                                            <>
                                              <Link to={data.to} className={data.hasMenu ? 'has-arrow' : ''}
                                                onClick={() => { handleSubmenuActive(data.title)}}
                                              >
                                                {data.title}
                                              </Link>
                                              <Collapse in={state.activeSubmenu === data.title ? true :false}>
                                                  <ul className={`${menuClass === "mm-collapse" ? "mm-show" : ""} ${data.to === path ? 'mm-active' : ''}`}>
                                                    {data.content && data.content.map((data,index) => {
                                                      return(	                                                    
                                                        <li key={index}>
                                                          <Link className={`${path === data.to ? "mm-active" : ""}`} to={data.to}>{data.title}</Link>
                                                        </li>
                                                        
                                                      )
                                                    })}
                                                  </ul>
                                              </Collapse>
                                            </>
                                          :
                                          <Link to={data.to} className={`${data.to === path ? 'mm-active' : ''}`}>
                                            {data.title}
                                          </Link>
                                        }                                    
                                      </li>                               
                                    )
                                  })}
                                </ul>
                              </Collapse>
                            </Fragment>
                          :
                          <Link  to={data.to} >
                              {data.iconStyle}{" "}
                              <span className="nav-text">{data.title}</span>
                          </Link>
                        }
                      </li>	
                    )
                }
            })}  
          </ul>         
          <div className="plus-box">
            <p className="fs-16 font-w500 mb-1">
                Check your job schedule
            </p>
            <Link to={"#"} className="text-white fs-26" >
                <i className="las la-long-arrow-alt-right" />
            </Link>
          </div>
          <div className="copyright">
            <p>
              <strong>Eres Hospital Admin Template</strong> © {dat.getFullYear()} All
              Rights Reserved
            </p>
            <p>
              Made with{" "}
              <span
                className={`heart ${heartBtn ? 'heart-blast' : ''}`}                
                onClick={()=>setHeartBtn(!heartBtn)}
              ></span>{" "}
              by DexignZone
            </p>
          </div>
			  </div>
      </div>
    );
  
}

export default SideBar;
