import React from "react";

const Speakers = (props) => {
  return (
    <>
      <div className="speakers" id="nav3">

        <h1>SPEAKERS</h1>

        <div className="main_speakers">

          <div className="leftbtn" id="goleft">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>

          <div className="card" id="c1">

            <img src="../shared/monkey meme.png" className="photo" alt="" />
            <hr className="odd" />

            <div className="card_main">
              <h3>Person 1</h3>
              <h4>Chief Cool</h4>
              <img src="../shared/monkey meme.png" className="logo" alt="" />
            </div>

          </div>

          <div className="card" id="c2">

            <img src="../shared/monkey meme.png" className="photo" alt="" />
            <hr className="even" />

            <div className="card_main">
              <h3>Person 2</h3>
              <h4>Senior Chief Cool</h4>
              <img src="../shared/monkey meme.png" className="logo" alt="" />
            </div>

          </div>

          <div className="card" id="c3">

            <img src="../shared/monkey meme.png" className="photo" alt="" />
            <hr className="odd" />

            <div className="card_main">
              <h3>Person 3</h3>
              <h4>Chief Maybe</h4>
              <img src="../shared/monkey meme.png" className="logo" alt="" />
            </div>

          </div>

          <div className="card" id="c4">

            <img src="../shared/monkey meme.png" className="photo" alt="" />
            <hr className="even" />

            <div className="card_main">
              <h3>Person 4</h3>
              <h4>Senior Chief Awesome</h4>
              <img src="../shared/monkey meme.png" className="logo" alt="" />
            </div>

          </div>

          <div className="rightbtn" id="goright">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>

        </div>

      </div>
    </>
  );
};

export default Speakers;
