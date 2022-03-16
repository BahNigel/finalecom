import React, { useEffect, useState } from 'react'
import './header.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from '../home/Home';
import News from '../profile/Profile';
import Market from '../market/Market';
import Users from '../profile/rightNav/js/Users';
import { FaHamburger } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import { Accessories, Brand, Clothing, General, Shoes } from './Data';
import PrimePro from '../market/PrimePro';
import Chart from '../market/Chart';
import SearchBox from '../SearchBox';
import {TiShoppingCart} from 'react-icons/ti';
import Login from '../creatAcc/Login';
import signin from '../creatAcc/Signin';
import Shipping from '../shipping/Shipping';
import Payment from '../payment/Payment';
import PlaceOrder from '../placeorder/PlaceOrder';
import Order from '../order/Order';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions/userActions';
import { listProductCategories } from '../../actions/productActions';
import SideBar from '../SideBar';
import Sellers from '../sellers/Sellers';
import OrderHistory from '../orderHistory/OrderHistory';
import Products from '../profile/rightNav/js/Products';
import Index from '../profile/rightNav/js/Index';
import Newuser from '../profile/rightNav/js/Newuser';
import Newproducts from '../profile/rightNav/js/Newproducts';
import Trendding from '../profile/rightNav/js/Trendding';
import EditUser from '../profile/rightNav/js/EditUser';
import EditOrder from '../editorder/EditOrder';
import Userdisplay from '../profile/rightNav/js/Userdisplay';
import OrderList from '../profile/rightNav/js/OrderList';
import Pproducts from '../profile/rightNav/js/Pproducts';



var lastTopScroll = 0;
document.addEventListener('scroll', ()=>{
    let topScroll = window.pageYOffset || document.documentElement.topScroll;
    if(topScroll > lastTopScroll){
        document.querySelector('.headContainer').style.transform = 'translateY(-100%)';
    }
    else{
        document.querySelector('.headContainer').style.transform = 'translateY(0)';
    }
    lastTopScroll = topScroll;
})
export default function Header() {

    const cart = useSelector((state) => state.cart);
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
      dispatch(signout());
    };
  
    const productCategoryList = useSelector((state) => state.productCategoryList);
    const {
      loading: loadingCategories,
      error: errorCategories,
      categories,
    } = productCategoryList;
    useEffect(() => {
      dispatch(listProductCategories());
    }, [dispatch]);

    return (
        <Router>
        <div>
            {/* -----------------beaging of header-------------- */}
            <div className="headContainer">
            <div style={{marginTop:'25px',marginLeft:'15px'}} className="logo">LOGO</div>
            
            <span className="topNavMenu">
                <ul className="menuList">
                    <li className="menuListItem"><a><Link to="/">Home</Link></a></li>
                    <li className="menuListItem">
                        <div className="container">
                        <a href="#" className="men">Men</a>
                        </div>



                        <div className="dropdownContainer">
                            <div className="dropdownItemContainer-1">
                                <ul>
                                {General.map((item, index) => {
                                    return(
                                      <li  className={item.cName} key={index}><Link  to={item.path}>
                                     
                                          <span>{item.title}</span>
                                          </Link></li>
                                    )
                                })}
                                </ul>
                            </div>
                            <div className="dropdownItemContainer-2">
                            <ul>
                                {Shoes.map((item, index) => {
                                    return(
                                      <li  className={item.cName} key={index}><Link to={item.path}>
                                          
                                          <span>{item.title}</span></Link></li>
                                    )
                                })}
                                </ul>
                            </div>
                            <div className="dropdownItemContainer-3">
                            <ul>
                                {Clothing.map((item, index) => {
                                    return(
                                      <li  className={item.cName} key={index}><Link to={item.path}>
                                          
                                          <span>{item.title}</span></Link></li>
                                    )
                                })}
                                </ul>
                            </div>
                            <div className="dropdownItemContainer-4">
                            <ul>
                                {Accessories.map((item, index) => {
                                    return(
                                      <li  className={item.cName} key={index}><Link to={item.path}><div className="items">
                                          
                                          <span>{item.title}</span></div></Link></li>
                                    )
                                })}
                                </ul>
                            </div>
                            <div className="dropdownItemContainer-5">
                            <ul>
                                {Brand.map((item, index) => {
                                    return(
                                      <li  className={item.cName} key={index}><Link to={item.path}>
                                          
                                          <span>{item.title} </span></Link></li>
                                    )
                                })}
                                </ul>
                            </div>
                        </div>


                    </li>
                    <li className="menuListItem">
                    <div className="container">
                        <a href="#" className="men">Women</a>
                        </div>
                        


                        <div className="dropdownContainer">
                            <div className="dropdownItemContainer-1">
                                <ul>
                                {General.map((item, index) => {
                                    return(
                                      <li  className={item.cName} key={index}><Link to={item.path}>
                                          
                                          <span>{item.title}</span>
                                          </Link></li>
                                    )
                                })}
                                </ul>
                            </div>
                            <div className="dropdownItemContainer-2">
                            <ul>
                                {Shoes.map((item, index) => {
                                    return(
                                      <li  className={item.cName} key={index}><Link to={item.path}>
                                          
                                          <span>{item.title}</span></Link></li>
                                    )
                                })}
                                </ul>
                            </div>
                            <div className="dropdownItemContainer-3">
                            <ul>
                                {Clothing.map((item, index) => {
                                    return(
                                      <li  className={item.cName} key={index}><Link to={item.path}>
                                          
                                          <span>{item.title}</span></Link></li>
                                    )
                                })}
                                </ul>
                            </div>
                            <div className="dropdownItemContainer-4">
                            <ul>
                                {Accessories.map((item, index) => {
                                    return(
                                      <li  className={item.cName} key={index}><Link to={item.path}><div className="items">
                                          
                                          <span>{item.title}</span></div></Link></li>
                                    )
                                })}
                                </ul>
                            </div>
                            <div className="dropdownItemContainer-5">
                            <ul>
                                {Brand.map((item, index) => {
                                    return(
                                      <li  className={item.cName} key={index}><Link to={item.path}>
                                          
                                          <span>{item.title} </span></Link></li>
                                    )
                                })}
                                </ul>
                            </div>
                        </div>

                        
                    </li>
                    <li className="menuListItem">
                    <div className="container">
                        <a href="#" className="men">Kids</a>
                        </div>
                        


                        <div className="dropdownContainer">
                            <div className="dropdownItemContainer-1">
                                <ul>
                                {General.map((item, index) => {
                                    return(
                                      <li  className={item.cName} key={index}><Link to={item.path}>
                                          
                                          <span>{item.title}</span>
                                          </Link></li>
                                    )
                                })}
                                </ul>
                            </div>
                            <div className="dropdownItemContainer-2">
                            <ul>
                                {Shoes.map((item, index) => {
                                    return(
                                      <li  className={item.cName} key={index}><Link to={item.path}>
                                          
                                          <span>{item.title}</span></Link></li>
                                    )
                                })}
                                </ul>
                            </div>
                            <div className="dropdownItemContainer-3">
                            <ul>
                                {Clothing.map((item, index) => {
                                    return(
                                      <li  className={item.cName} key={index}><Link to={item.path}>
                                          
                                          <span>{item.title}</span></Link></li>
                                    )
                                })}
                                </ul>
                            </div>
                            <div className="dropdownItemContainer-4">
                            <ul>
                                {Accessories.map((item, index) => {
                                    return(
                                      <li  className={item.cName} key={index}><Link to={item.path}><div className="items">
                                          
                                          <span>{item.title}</span></div></Link></li>
                                    )
                                })}
                                </ul>
                            </div>
                            <div className="dropdownItemContainer-5">
                            <ul>
                                {Brand.map((item, index) => {
                                    return(
                                      <li  className={item.cName} key={index}><Link to={item.path}>
                                          
                                          <span>{item.title} </span></Link></li>
                                    )
                                })}
                                </ul>
                            </div>
                        </div>                       
                    </li>
                    {userInfo && userInfo.isAdmin && (
                    <li className="menuListItem"><a><Link to="/profile">Admin</Link></a></li>
                    )}
                    <li className="menuListItem"><a><Link to="/market">Market</Link></a></li>
                   
                    <li className="menuListItem1">
                        <Route
                            render={({ history }) => (
                                <SearchBox history={history}></SearchBox>
                            )}
                            ></Route>
                    </li>
                    <li className="menuListItem Phone1" style={{marginTop:'5px'}}>
                        
                            <BiUser size={30}/>
                       
                            {userInfo ? (
                                        <div className="dropdown" >
                                            <Link to="#">
                                            {userInfo.name}{' '}
                                            </Link>
                                            <ul className="dropdown-content" style={{marginTop:'-3px',backgroundColor:'white',border:'1px solid gray'}}>
                                            <li style={{borderBottom:'1px solid gray'}}>
                                                <Link to="/profile">User Profile</Link>
                                            </li>
                                            <li style={{borderBottom:'1px solid gray'}}>
                                                <Link to="/orderhistory">Order History</Link>
                                            </li>
                                            <li>
                                                <Link to="#signout" onClick={signoutHandler}>
                                                Log Out
                                                </Link>
                                            </li>
                                            </ul>
                                        </div>
                                        ) : (
                                        <Link to="/login">Log In</Link>
                                        )}
                    </li>
                    {cartItems.length > 0 && (
                    <li className="menuListItem  Phone1">
                        <div className='chartsss'>
                        <Link to='/cart'>
                           <TiShoppingCart  className='chatItem' />
                        </Link>
                        <span className="check">{cartItems.length}</span>
                        </div>
                    </li>
                    )}
                    <li className='menuListItem leftSideNavigation'>
                    <div className="leftSideNavContainer">
                    <button onClick={() => setSidebarIsOpen(true)}><FaHamburger size={30}/></button>
                <div className='leftSideNavSecondContainer'>
                <SideBar fall={setSidebarIsOpen} sidebar={sidebarIsOpen} />
                </div>
            </div>
                    </li>
                </ul>
            </span>
            </div>
            
               {/* -----------------end of header-------------- */}

               
    
   </div>
   <Switch>
   <Route path='/' exact component={Home}/>
   <Route path="/seller/:id" exact component={Sellers}></Route>
   <Route path='/profile' exact component={News}/>
   <Route path='/market' exact component={Market} />
   <Route path='/orderhistory' exact component={OrderHistory}/>
   <Route path='/market/:item' exact component={Market} />
   <Route path='/mypage' exact component={Users} />
   <Route path='/mypage/:id'exact component={PrimePro} />
   <Route path='/cart/:id' exact component = {Chart} />
   <Route path='/cart' exact component = {Chart} />
   <Route path='/signin' exact component = {signin} />
   <Route path='/login' exact component = {Login} />
   <Route path='/payment' exact component={Payment}/>
   <Route path='/placeorder' exact component={PlaceOrder}/>
   <Route path='/order/:id' exact component={Order}/>
   <Route path='/shipping' exact component={Shipping}/>
   <Route path="/search/name/:name?" component={Market} exact></Route>
   <Route path="/search/category/:category" component={Market} exact ></Route>
   <Route path="/search/category/:category/name/:name" component={Market} exact ></Route>
   <Route path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber" component={Market} exact ></Route>
   <Route path='/profile' exact component={Index} />
    <Route path='/profile/products' exact component={Products} />
    <Route path='/profile/users' exact component={Users} />
    <Route path='/profile/users/creat' exact component={Newuser} />
    <Route path='/profile/products/newproducts' exact component={Newproducts} />
    <Route path='/profile/trending' exact component={Trendding} />
    <Route path='/profile/products/:id/edit' exact component={Pproducts} /> 
    <Route path='/profile/orderlist' exact component={OrderList}/> 
    <Route path='/profile/:display' exact component={Userdisplay} /> 
    <Route path='/porfile/order/:id' exact component={EditOrder} />
    <Route path='/profile/user/:id/edit' exact component={EditUser}/>
   </Switch>
   </Router>
    )
}
