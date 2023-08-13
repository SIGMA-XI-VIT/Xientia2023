import React from "react";

const Speakers = (props) => {
  return (
    <>
      <div class="speakers" id="nav3">

        <h1>SPEAKERS</h1>

        <div class="main_speakers">

          <div class="leftbtn" id="goleft">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>

          <div class="card" id="c1">

            <img src="../shared/monkey meme.png" class="photo" alt="" />
            <hr class="odd" />

            <div class="card_main">
              <h3>Person 1</h3>
              <h4>Chief Cool</h4>
              <img src="../shared/monkey meme.png" class="logo" alt="" />
            </div>

          </div>

          <div class="card" id="c2">

            <img src="../shared/monkey meme.png" class="photo" alt="" />
            <hr class="even" />

            <div class="card_main">
              <h3>Person 2</h3>
              <h4>Senior Chief Cool</h4>
              <img src="../shared/monkey meme.png" class="logo" alt="" />
            </div>

          </div>

          <div class="card" id="c3">

            <img src="../shared/monkey meme.png" class="photo" alt="" />
            <hr class="odd" />

            <div class="card_main">
              <h3>Person 3</h3>
              <h4>Chief Maybe</h4>
              <img src="../shared/monkey meme.png" class="logo" alt="" />
            </div>

          </div>

          <div class="card" id="c4">

            <img src="../shared/monkey meme.png" class="photo" alt="" />
            <hr class="even" />

            <div class="card_main">
              <h3>Person 4</h3>
              <h4>Senior Chief Awesome</h4>
              <img src="../shared/monkey meme.png" class="logo" alt="" />
            </div>

          </div>

          <div class="rightbtn" id="goright">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>

        </div>

      </div>
    </>
  );
};

export default Speakers;
