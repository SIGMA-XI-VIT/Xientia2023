import React from "react";
import '../styles/Countdown.scss';

const Countdown = (props) => {
  var finalDate = new Date("Sep 22, 2023 12:00:00").getTime();

  var x = setInterval(() => {
    var now = new Date().getTime();

    var distance = finalDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);

  return (
    <div class="time_left">
      <div class="time">
        <p id="days"></p>
        <p>Days</p>
      </div>
      <div class="time">
        <p id="hours"></p>
        <p>Hours</p>
      </div>
      <div class="time">
        <p id="mins"></p>
        <p>Minutes</p>
      </div>
      <div class="time">
        <p id="sec"></p>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
