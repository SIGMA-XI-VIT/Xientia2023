import React from "react";

const Contact = (props) => {
  return (
    <>
    <div className="contact" id="nav5">

      <h1>CONTACT US</h1>

      <div className="main_contact">

        <div className="leftbtn2" id="goleft2">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>

        <div className="card1" id="d1">

          <div className="card_main">
            <h3>Chief Cool Awesome</h3>
            {/* <a href="https://wa.me/+917095063492" target="_blank"> */}
              <ion-icon name="logo-whatsapp"></ion-icon>
              <h3>+917999999999</h3>
            {/*</a>*/}
          </div>

        </div>

        <div className="card1" id="d2">

          <div className="card_main">
            <h3>Deputy Chief Cool Awesome</h3>
            {/* <a href="https://wa.me/+919104684900" target="_blank"> */}
              <ion-icon name="logo-whatsapp"></ion-icon>
              <h3>+918999999999</h3>
            {/*</a>*/}
          </div>

        </div>

        <div className="rightbtn2" id="goright2">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        </div>
    </div>
    </>
  );
};

export default Contact;
