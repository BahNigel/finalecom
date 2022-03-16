import React from 'react'
import {HiOutlineUser} from 'react-icons/hi';
import {BiCalendar} from 'react-icons/bi';
import {FaRegEnvelope} from 'react-icons/fa';
import {GrMapLocation} from 'react-icons/gr';
import {GiSmartphone} from 'react-icons/gi';
import '../css/userdisplay.css';
import images from '../../../E-images/download (6).jfif';




export default function Userdisplay() {
    return (
        <div>
            
            <div className="userData">
                   <div className="profileImageAndData">
                       <img src={images} alt="" className="profileImag"/>
                           <span className="profileDataAndName">
                               <div className="profileName">Hana martin</div>
                               <div className="profileTitle">Software developer</div>
                           </span>
                   </div>
                   <div className="acoutDitales">
                       <span className="acoutDitalesTitle">Acout Details</span>
                           <div className="acoutId">
                               <div className="idIcon"><HiOutlineUser/></div>
                                   <span className="idText">thielsose</span>
                           </div>
                           <div className="acoutId">
                               <div className="idIcon"><BiCalendar/></div>
                                   <span className="idText">10.12.9999</span>
                           </div>
                       
                   </div>
                   
                   <div className="acoutDitales">
                       <span className="acoutDitalesTitle">Contact</span>
                           <div className="acoutId">
                               <div className="idIcon"><GiSmartphone/></div>
                                   <span className="idText">+233 454 545</span>
                           </div>
                           <div className="acoutId">
                               <div className="idIcon"><FaRegEnvelope/></div>
                                   <span className="idText">dlsif@yahoo.com</span>
                           </div>
                           <div className="acoutId">
                               <div className="idIcon"><GrMapLocation/></div>
                                   <span className="idText">New York | USA</span>
                           </div>
                       
                   </div>
               </div>



        </div>
    )
}
