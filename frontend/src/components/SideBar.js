import React, { useState } from 'react';
import { ProfileNav, SideBarNav } from './header/Data';
import SearchBox from './SearchBox';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';

export default  function SideBar (props){
    
    const userSignin = useSelector((state) => state.userSignin);
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
      dispatch(signout());
    };
   return(
       <>
       <div className={`sideBar  ${props.sidebar?'':'open'}`}>
           <ul>
               
               {SideBarNav.map((item, index) => {
                   return(
                       <li key={index} className={item.cName}>
                       <span className='span'>{item.icon}</span>
                        <Link  onClick={() => props.fall(false)} style={{color:'white'}} to={item.path}> {item.title}</Link>
                       </li>
                   )
               })}
               {userInfo && userInfo.isAdmin && (
                    <li className="leftSideNav">
                    <span className='span'><AiFillHome/></span>
                    Admin
                    <ul className='profileLeftNavList'>
                    {ProfileNav.map((item, index) => {
                        return(
                            <li key={index} classname={item.cName}>
                            <Link  onClick={() => props.fall(false)} style={{color:'white'}} to={item.path}> {item.title} </Link>
                            </li>
                        )
                    })}
                    </ul>
                    </li>
                    )}
               <li className="leftSideNav" style={{marginTop:'5px'}}>
                        
                            <BiUser size={30}/>
                       
                            {userInfo ? (
                                        <div className="dropdown" >
                                            <Link  onClick={() => props.fall(false)} style={{color:'green'}} to="#">
                                            {userInfo.name}{' '}
                                            </Link>
                                            <ul className="dropdown-content" style={{ width:'200px', left:'-80px', marginTop:'-2px',backgroundColor:'white',border:'1px solid gray'}}>
                                            <li style={{borderBottom:'1px solid gray'}}>
                                                <Link  onClick={() => props.fall(false)} to="/profile">User Profile</Link>
                                            </li>
                                            <li style={{borderBottom:'1px solid gray'}}>
                                                <Link  onClick={() => props.fall(false)} to="/orderhistory">Order History</Link>
                                            </li>
                                            <li>
                                                <Link  onClick={() => props.fall(false)} to="#signout" onClick={signoutHandler}>
                                                Log Out
                                                </Link>
                                            </li>
                                            </ul>
                                        </div>
                                        ) : (
                                        <Link  onClick={() => props.fall(false)} to="/login">Log In</Link>
                                        )}
                    </li>
           </ul>
       </div>
       </>
   )

}