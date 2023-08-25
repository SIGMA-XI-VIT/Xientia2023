import React from "react";
import { Button } from "react-bootstrap";
import '../styles/buttons.scss';

const Groups = (props) => {
  return (
    <div className="groups">
      <div className="button">
        <a href="">
          <Button variant="dark">Join the WhatsApp Group</Button>
        </a>
      </div>

      <div className="button">
        <a href="">
        <Button variant="dark">Join our Discord Server</Button>
        </a>
      </div>
    </div>
  );
};

export default Groups;
