import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
  return (
     <div key={product._id} className="goodContainer">
                    <table >
                        <tr>
                            <td>
                            <Link to={`/mypage/${product._id}`}> 
                            <div className="goodImage">
                               <img style={{height:'100%',width:'100%'}} src={product.image} alt={product.name} className='goodImageItem' />
                            </div></Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <div className="goodSubimage">
                                <button className="goodSubimageButton">
                                  ADD TO CART
                                </button>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <div className="goodDescription">
                                <a href="" className="name">
                                    {product.name}
                                    <span className="price">${product.price}</span>
                                </a><br/>
                                <a href="" className="discription">{product.description}</a>
                            </div>
                            </td>
                        </tr>
                    </table>
                </div>
  );
}
