import React from "react";

const Submit = props => {
    return (
        <>
        <div className="submit-container">
            <h1 className="submitTitle">XIENTIA</h1>
            <form>
                <div className="teamName">
                    <h3 className="teamName">Team Name:</h3>
                    <input type="text" className="teamName" placeholder="Enter Team Name."></input>
                </div>
                
                <div className="teamMem">
                    <h3 className="teamMem">Number of Members:</h3>
                    <input type="text" className="teamMem" id="members" placeholder="Enter Number of Members."></input>
                </div>

                <div className="teamEmail">
                    <h3 className="teamEMail">Team Leader's E-Mail</h3>
                    <input type="text" className="teamEmail" placeholder="Enter Team Leader's Email."></input>
                </div>

                <div className="pptLink">
                    <h3 className="pptLink">PPT link:</h3>
                    <input type="text" className="pptLink" placeholder="Enter shareable PPT link."></input>
                </div>
            </form>
        </div>
    </>
    )
}

export default Submit;