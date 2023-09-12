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
                <h3>Neha Suresh</h3>
                <a href="https://wa.me/+919442547893" target="_blank" rel="noreferrer">
                <h4>Open Whatsapp</h4>
                </a>
                <h4>E-mail: neha.suresh2022@vitstudent.ac.in</h4>
              </div>
            </div>

            <div className="cardx1" id="d2">
              <div className="cardx_main">
                <h3>Prakriti Bhattacharya</h3>
                <a href="https://wa.me/+919833958047" target="_blank" rel="noreferrer">
                <h4>Open Whatsapp</h4>
                </a>
                <h4>E-mail: prakriti.b2022@vitstudent.ac.in</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
