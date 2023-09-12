import React from "react";
import { Button } from "react-bootstrap";
import '../styles/buttons.scss';
import '../styles/groups.scss';

const Groups = (props) => {
  return (
    <div className="groups">
      <div className="button">
        <a href="/">
          <Button variant="dark">Join the WhatsApp Group</Button>
        </a>
      </div>

      <div className="button1">
        <a href="https://discord.gg/hy99VRz7q8">
        <Button variant="dark">Join our Discord Server</Button>
        </a>
      </div>
    </div>
  );
};

export default Groups;
