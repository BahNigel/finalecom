import React, { useEffect } from 'react';
import './home.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Goods } from '../market/Allgoodsdata';
import Product from '../Product';
import { useDispatch, useSelector } from 'react-redux';
import MessageBox from '../MessageBox';
import LoadingBox from '../LoadingBox';
import { Carousel } from 'react-responsive-carousel';
import { listProduc9 } from '../../actions/productActions';
import { listTopSellers } from '../../actions/userActions';


export default function Home() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;

  useEffect(() => {
    dispatch(listProduc9({}));
    dispatch(listTopSellers());
  }, [dispatch]);
  return (
    <div className='mainHomeContainerFroAll'>
      <div className="mainContainer">
      </div>


      <div className="aboutUs">
        Start shopping

        with us today

      </div>
      <div className="somegoods">
        somegoods you may like
      </div>


      <div id="secondContainer">

        {/* ------- start of goods ------------- */}
        <div>

          <h2>Featured Products</h2>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
              <div className="row center">
                {products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
            </>
          )}
        </div>

        {/* ------- end of goods ------------- */}



      </div>
      <div className='sellers'></div>
      <h2>Top Sellers</h2>
      {loadingSellers ? (
        <LoadingBox></LoadingBox>
      ) : errorSellers ? (
        <MessageBox variant="danger">{errorSellers}</MessageBox>
      ) : (
        <>
          {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
          <Carousel showArrows autoPlay showThumbs={false}>
            {sellers.map((seller) => (
              <div key={seller._id}>
                <Link to={`/seller/${seller._id}`}>
                  <img src={seller.seller.logo} alt={seller.seller.name} />
                  <p className="legend">{seller.seller.name}</p>
                </Link>
              </div>
            ))}
          </Carousel>
        </>
      )}
      <div className="rating">
        <h1>this is footer</h1>

      </div>
    </div>
  )
}
