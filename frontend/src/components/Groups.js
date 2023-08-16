import React from "react";
import '../styles/buttons.scss';

const Groups = (props) => {
  return (
    <div className="groups">
      <div className="button">
        <a href="">
          <button id="whatsapp">Join the WhatsApp Group</button>
        </a>
      </div>

      <div className="button">
        <a href="">
          <button id="discord">Join our Discord Server</button>
        </a>
      </div>
    </div>
  );
};

export default Groups;
