import React from 'react';
import '../css/info.css';


export default function Info() {
    return (
        <div>
            <span className="title">Send Information</span>
            <div className="mainFormContainer">
                <form className="inputForm">
                    <div className="leftForm">
                    <span className="gender">File</span>
                    <div className="fromInputContian">
                            <label  className="labelForm">Image:</label>
                            <span className="input">
                                <input type="file"  className="inputItem" />
                            </span>
                        </div>
                        <div className="fromInputContian">
                            <span className="input">
                                <textarea type="text" placeholder="Say something..." className="inputItemText" />
                            </span>
                        </div>


                        <div className="fromInputContian">
                            <button className="create">Create</button>
                        </div>

                    </div>


                </form>
            </div>
        </div>
    )
}
