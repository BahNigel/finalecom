import React from 'react'
import './profile.css';
import { sideBar } from './Data';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Index from './rightNav/js/Index';
import Products from './rightNav/js/Products';
import Trendding from './rightNav/js/Trendding';
import Users from './rightNav/js/Users';
import Puser from './rightNav/js/EditUser';
import Newuser from './rightNav/js/Newuser';
import Pproducts from './rightNav/js/Pproducts';
import Newproducts from './rightNav/js/Newproducts';
import Userdisplay from './rightNav/js/Userdisplay';
import OrderList from './rightNav/js/OrderList';
import EditOrder from '../editorder/EditOrder';
import EditUser from './rightNav/js/EditUser';







export default function News() {
    
    return (
        <Router>
        <div >
            <div className="profileContainer">
                <div className="leftSidenav">
                    <ul>
                    {sideBar.map((item,index)=>
                    {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    </ul>
                </div>
                <div className="rightSidenav">
                    <Switch>
                    <Route path='/profile' exact component={Index} />
                    <Route path='/profile/products' exact component={Products} />
                    <Route path='/profile/users' exact component={Users} />
                    <Route path='/profile/users/creat' exact component={Newuser} />
                    <Route path='/profile/products/newproducts' exact component={Newproducts} />
                    <Route path='/profile/trending' exact component={Trendding} />
                    <Route path='/profile/users/:userid' exact component={Puser} /> 
                    <Route path='/profile/products/:id/edit' exact component={Pproducts} /> 
                    <Route path='/profile/orderlist' exact component={OrderList}/> 
                    <Route path='/profile/:display' exact component={Userdisplay} /> 
                    <Route path='/porfile/order/:id' exact component={EditOrder} />
                    <Route path='/profile/user/:id/edit' exact component={EditUser}/>
                 </Switch>
                </div>
                
            </div>
        </div>
        </Router>
    )
}
