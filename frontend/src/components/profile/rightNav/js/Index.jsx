import React from 'react'
import '../css/index.css';
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";
import {Line} from 'react-chartjs-2';
import { costomer, data, user } from './Data';
import {MdVisibility} from 'react-icons/md';
import { Link } from 'react-router-dom';



export default function Index() {
    const Button = ({ type })=>{
        return <button className={" widgetRButton " + type   } >{type} </button>;
    };
    return (
        <div>
        <div className="featured">
            <div className="featuredInfo">
                <span className="featuredtitle">Revanue</span>
                <div className="featuredContainer">
                    <span className="featuedMoney">$384</span>
                    <span className="moneyRate">
                        -11.34<AiOutlineArrowDown className='featuredIcon negative' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredInfo">
                <span className="featuredtitle">sales</span>
                <div className="featuredContainer">
                    <span className="featuedMoney">$384</span>
                    <span className="moneyRate">
                        -11.34<AiOutlineArrowDown className='featuredIcon negative' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredInfo">
                <span className="featuredtitle">cost</span>
                <div className="featuredContainer">
                    <span className="featuedMoney">$384</span>
                    <span className="moneyRate">
                        +2.34<AiOutlineArrowUp className='featuredIcon' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            </div>
            <div className="chart">
                <h3 className="chartTitle">Sales Analytics</h3>
                <Line data={data} />
            </div>
            <div className="homeWidgets">
                <div className="leftss">
                    <span className="widgetsTitle">Newly join member</span>
                    <ul className='widgetList'>
                        {user.map((item,index)=>{
                            return(
                            <li key={index} className="widgetItem">
                                <img src={item.image} alt="" className="widgetImage" />
                                <div className="widgetUser">
                                    <span className="widgetUsername">{item.username}</span>
                                    <span className="widgetTitle">{item.title} </span>
                                </div>
                                <button className={"widgetButton"}>
                                    <Link to={'/profile/display'+item.id}>
                                <MdVisibility/>
                                Display
                                </Link>
                            </button>
                            </li>
                            )
                        })}
                       
                    </ul>
                </div>
                <span className="right">
                    <h3 className="widgetsTitle">Latest Tansactions</h3>
                    <table  className="widgetTable">
                        <tr className="widgetTr">
                            <th className="widgetTh">Customer</th>
                            <th className="widgetTh">Date</th>
                            <th className="widgetTh">Amount</th>
                            <th className="widgetTh">Tatus</th>
                        </tr>
                            {costomer.map((item,index)=>
                            {
                                return(
                                    <tr key={index} className="widgetTr">
                                    <td className="widgetTdItem1">
                                    <img src={item.image} alt="" className="widgetRImage" />
                                    <span className="widgetUsername">
                                    {item.username}
                                    </span>
                                    </td>
                                    <td className="widgetTdItem">
                                        {item.date}
                                    </td>
                                    <td className="widgetTdItem">
                                        {item.amout}
                                    </td>
                                    <td className="widgetTdItem">
                                        <Button type={item.status} />
                                    </td>
                                    </tr>
                                )
                            })}
                        
                    </table>
                </span>
            </div>
        </div>
    )
}
