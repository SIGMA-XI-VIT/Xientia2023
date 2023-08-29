import React from "react";
import '../styles/contact.scss'

const Contact = (props) => {
  return (
    <>
      <div className="container" id="contact1">
        <div className="contact" id="nav5">
          <h1>CONTACT US</h1>

          <div className="main_contact">
            <div className="cardx1" id="d1">
              <div className="cardx_main">
                <h3>Chief Cool Awesome</h3>
                {/* <a href="https://wa.me/+917095063492" target="_blank"> */}
                <h3>+917999999999</h3>
                {/*</a>*/}
              </div>
            </div>

            <div className="cardx1" id="d2">
              <div className="cardx_main">
                <h3>Deputy Chief Cool Awesome</h3>
                {/* <a href="https://wa.me/+919104684900" target="_blank"> */}
                <h3>+918999999999</h3>
                {/*</a>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
