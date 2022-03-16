import React from 'react';
import '../css/newuser.css';


export default function Newuser() {
    return (
        <div>
            <span className="title">New user</span>
            <div className="mainFormContainer">
                <form className="inputForm">
                    <div className="leftForm">
                        <div className="fromInputContian">
                            <label  className="labelForm">Username:</label>
                            <span className="input">
                                <input type="text" placeholder="Jhon" className="inputItem" />
                            </span>
                        </div>
                        <div className="fromInputContian">
                            <label  className="labelForm">Email:</label>
                            <span className="input">
                                <input type="text" placeholder="Jhon@yahoo.com" className="inputItem" />
                            </span>
                        </div>
                        <div className="fromInputContian">
                            <label  className="labelForm">phone:</label>
                            <span className="input">
                                <input type="text" placeholder="+343 454 343 232" className="inputItem" />
                            </span>
                        </div>


                            <span className="gender">Gender</span>
                        <div className="fromInputContian">
                            <label  className="labelForm">male</label>
                            <span style={{padding:'0 10px'}} className="input">
                                <input style={{height:'15px',width:'15px'}} type="radio" placeholder="Jhon" className="inputItem" />
                            </span>
                            <label  className="labelForm">Female</label>
                            <span style={{padding:'0 10px'}} className="input">
                                <input style={{height:'15px',width:'15px'}}  type="radio" placeholder="Jhon" className="inputItem" />
                            </span>
                        </div>


                        <div className="fromInputContian">
                            <button className="create">Create</button>
                        </div>

                    </div>
                    <div className="rightForm">
                    <div className="fromInputContian">
                            <label  className="labelForm">Full name:</label>
                            <span className="input">
                                <input type="text" placeholder="+343 454 343 232" className="inputItem" />
                            </span>
                        </div>
                        <div className="fromInputContian">
                            <label  className="labelForm">Password:</label>
                            <span className="input">
                                <input type="text" placeholder="+343 454 343 232" className="inputItem" />
                            </span>
                        </div>
                        <div className="fromInputContian">
                            <label  className="labelForm">Address:</label>
                            <span className="input">
                                <input type="text" placeholder="+343 454 343 232" className="inputItem" />
                            </span>
                        </div>
                        <div className="fromInputContian">
                            <label  className="labelForm">Active:</label>
                            <span className="input">
                                <select type="text" placeholder="+343 454 343 232" className="inputItem" >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
