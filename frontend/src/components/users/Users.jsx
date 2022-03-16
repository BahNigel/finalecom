import React from 'react';
import './users.css';
import images from '../E-images/download (2).jfif';
import {HiOutlineUser} from 'react-icons/hi';
import {BiCalendar} from 'react-icons/bi';
import {FaRegEnvelope, FaUpload} from 'react-icons/fa';
import {GrMapLocation} from 'react-icons/gr';
import {GiSmartphone} from 'react-icons/gi';
import {rows} from './Userdata';
import { DataGrid } from '@material-ui/data-grid';
import {MdDelete} from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Users() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
          field: 'pruducts',
          headerName: ' Pruducts',
          width: 170,
          editable: true,
          renderCell : (params)=>{
              return <div className="profileList">
                  <img className='profileImage' src={params.row.avatar} alt="" />
                  {params.row.productName}
              </div>
          }
        },
        {
          field: 'Pdate',
          headerName: 'Purchase Date',
          width: 250,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 150,
          editable: true,
        },
        {
          field: 'price',
          headerName: 'price',
          width: 160,
          editable: true,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 160,
            editable: true,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={'/mypage/product'+params.row.id}>
                    <button className="actionButtonss">Vew Item</button>
                    </Link>
                    <MdDelete className="actionDelete" />
                    </>
                )
            }
          },
      ];
      
    return (
        <div className="usersMainContainer">
            <div className="usersFristContainer">
                <div className="leftUserscontainer">
                   
               
               <div className="userDatass">
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
                <div className="rightUserscontainer">
                    
               <div className="userFormss">
                   <div className="userFormLeft">
                    <span className="userFormTitle">Edit</span>
                    <form action="" className="userFormList">
                        <div className="userFormLC">
                            <lable className="userFormLCLable">Username:</lable>
                            <span className="formInput">
                                <input type="text" className="userFormItem" />
                            </span>
                        </div>
                        <div className="userFormLC">
                            <lable className="userFormLCLable">Full Name:</lable>
                            <span className="formInput">
                                <input type="text" className="userFormItem" />
                            </span>
                        </div>
                        <div className="userFormLC">
                            <lable className="userFormLCLable">Email:</lable>
                            <span className="formInput">
                                <input type="text" className="userFormItem" />
                            </span>
                        </div>
                        <div className="userFormLC">
                            <lable className="userFormLCLable">Phone:</lable>
                            <span className="formInput">
                                <input type="text" className="userFormItem" />
                            </span>
                        </div>
                        <div className="userFormLC">
                            <lable className="userFormLCLable">Adress:</lable>
                            <span className="formInput">
                                <input type="text" className="userFormItem" />
                            </span>
                        </div>
                    </form>
                   </div>
                   <div className="userFormRight">
                   <img src={images} alt="" className="fileImage"/>
                   <div>
                       <label htmlFor="file" className="file"><FaUpload/></label>
                       <input type="file" id="file" style={{display:'none'}} />
                       <button className="update">Update</button>
                   </div>
                   </div>
               </div>
                </div>
            </div>
            <div className="usersSecondContainer">
                <div className="downUserscontainer">
                <h1>Products Purchased</h1>
           <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
                </div>
            </div>
        </div>
    )
}
